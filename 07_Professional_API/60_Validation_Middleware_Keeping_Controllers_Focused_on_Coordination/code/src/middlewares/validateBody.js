// src/middlewares/validateBody.js
export const validateBody = (schema) => {
  return (req, res, next) => {
    const { value, error } = schema.validate(req.body, {
      abortEarly: false,
      convert: false
    });

    if (error) {
      return res.status(400).json({
        error: {
          code: "VALIDATION_ERROR",
          message: "Request body is invalid",
          details: error.details.map((item) => ({
            path: item.path.join("."),
            message: item.message,
            type: item.type
          }))
        }
      });
    }

    req.body = value;
    next();
  };
};
