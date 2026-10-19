export function errorHandler(error, req, res, next) {
  if (res.headersSent) return next(error);
  if (error.name === "ValidationError") {
    return res.status(400).json({ message: "Invalid book data", errors: Object.values(error.errors).map(item => item.message) });
  }
  if (error?.code === 11000) return res.status(409).json({ message: "ISBN already exists" });
  if (error.name === "CastError") return res.status(400).json({ message: "Invalid value" });
  res.status(error.status ?? 500).json({ message: error.status ? error.message : "Internal server error" });
}
