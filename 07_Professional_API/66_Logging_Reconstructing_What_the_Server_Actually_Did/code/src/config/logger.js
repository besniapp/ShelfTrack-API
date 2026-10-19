// src/config/logger.js
import pino from "pino";
import { config } from "./config.js";

export const logger = pino({
  level: config.logLevel,
  redact: [
    "req.headers.authorization",
    "password",
    "token"
  ]
});
