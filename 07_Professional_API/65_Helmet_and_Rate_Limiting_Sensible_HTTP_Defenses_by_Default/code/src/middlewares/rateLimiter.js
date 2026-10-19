import { rateLimit } from "express-rate-limit";
import { config } from "../config/config.js";

export const apiLimiter = rateLimit({
  windowMs: config.rateLimitWindowMs,
  limit: config.rateLimitMax,
  standardHeaders: "draft-8",
  legacyHeaders: false
});
