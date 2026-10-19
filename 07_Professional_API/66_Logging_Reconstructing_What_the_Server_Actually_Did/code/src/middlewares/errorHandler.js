export function errorHandler(error, req, res, next) {
  req.log?.error({ err: error }, "request failed");
  if (res.headersSent) return next(error);
  let status = error.status ?? 500;
  let code = error.code ?? "INTERNAL_ERROR";
  let message = error.status ? error.message : "Internal server error";
  if (error.name === "ValidationError") { status = 400; code = "MODEL_VALIDATION_FAILED"; message = "Invalid book data"; }
  if (error.name === "CastError") { status = 400; code = "INVALID_VALUE"; message = "Invalid value"; }
  if (error.code === 11000) { status = 409; code = "DUPLICATE_KEY"; message = "A unique value already exists"; }
  res.status(status).json({ error: { code, message } });
}
