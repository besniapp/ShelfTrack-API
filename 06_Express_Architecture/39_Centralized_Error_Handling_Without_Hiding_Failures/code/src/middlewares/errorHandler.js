export function errorHandler(error, req, res, next) {
  console.error(error);

  res.status(500).json({
    error: {
      code: "INTERNAL_ERROR",
      message: "Unexpected server error"
    }
  });
}
