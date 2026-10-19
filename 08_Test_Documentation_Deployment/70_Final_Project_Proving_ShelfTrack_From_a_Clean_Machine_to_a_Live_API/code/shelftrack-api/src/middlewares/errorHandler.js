import { AppError } from "../utils/AppError.js";

export function notFoundHandler(req, res) {
  res.status(404).json({ error: { code: "ROUTE_NOT_FOUND", message: `No route for ${req.method} ${req.originalUrl}` } });
}

export function errorHandler(error, req, res, next) {
  if (res.headersSent) return next(error);

  req.log?.error({ err: error }, "request failed");

  if (error instanceof AppError) {
    return res.status(error.status).json({ error: { code: error.code, message: error.message, ...(error.details && { details: error.details }) } });
  }
  if (error?.code === 11000) {
    const field = Object.keys(error.keyPattern ?? {})[0] ?? "field";
    return res.status(409).json({ error: { code: "DUPLICATE_VALUE", message: `${field} must be unique` } });
  }
  if (error?.name === "ValidationError") {
    const details = Object.values(error.errors ?? {}).map((item) => ({
      path: item.path,
      message: item.message,
      type: item.kind,
    }));
    return res.status(400).json({
      error: { code: "MODEL_VALIDATION_ERROR", message: "Stored data failed validation", details },
    });
  }
  if (error?.name === "VersionError") {
    return res.status(409).json({ error: { code: "STALE_WRITE", message: "Resource changed; reload and retry" } });
  }
  return res.status(500).json({ error: { code: "INTERNAL_ERROR", message: "Unexpected server error" } });
}
