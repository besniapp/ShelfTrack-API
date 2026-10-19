import "dotenv/config";

const required = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
};

const numberFromEnv = (name, fallback) => {
  const value = Number(process.env[name] ?? fallback);
  if (!Number.isFinite(value) || value < 0) throw new Error(`Invalid numeric config: ${name}`);
  return value;
};

export const config = {
  port: numberFromEnv("PORT", 3000),
  mongodbUri: required("MONGODB_URI"),
  corsOrigin: process.env.CORS_ORIGIN ?? "http://localhost:5173",
  logLevel: process.env.LOG_LEVEL ?? "info",
  rateLimitWindowMs: numberFromEnv("RATE_LIMIT_WINDOW_MS", 15 * 60 * 1000),
  rateLimitMax: numberFromEnv("RATE_LIMIT_MAX", 200),
};
