// src/config/config.js
import "dotenv/config";

function required(name) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is required`);
  return value;
}

function positiveInteger(name, fallback) {
  const raw = process.env[name];
  if (raw === undefined) return fallback;

  const value = Number(raw);
  if (!Number.isInteger(value) || value <= 0) {
    throw new Error(`${name} must be a positive integer`);
  }
  return value;
}

export const config = Object.freeze({
  port: positiveInteger("PORT", 3000),
  mongodbUri: required("MONGODB_URI"),
  corsOrigin: process.env.CORS_ORIGIN ?? "http://localhost:5173",
  logLevel: process.env.LOG_LEVEL ?? "info",
  rateLimitWindowMs: positiveInteger("RATE_LIMIT_WINDOW_MS", 15 * 60 * 1000),
  rateLimitMax: positiveInteger("RATE_LIMIT_MAX", 200)
});
