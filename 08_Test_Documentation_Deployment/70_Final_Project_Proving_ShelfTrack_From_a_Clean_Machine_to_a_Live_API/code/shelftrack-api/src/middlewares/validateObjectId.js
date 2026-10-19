import mongoose from "mongoose";

export const validateObjectId = (paramName) => (req, res, next) => {
  const value = req.params[paramName];
  if (!mongoose.isObjectIdOrHexString(value)) {
    return res.status(400).json({ error: { code: "INVALID_ID", message: `${paramName} must be a valid ObjectId` } });
  }
  next();
};
