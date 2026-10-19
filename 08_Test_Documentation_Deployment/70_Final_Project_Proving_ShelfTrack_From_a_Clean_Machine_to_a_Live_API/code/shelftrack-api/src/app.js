import express from "express";
import cors from "cors";
import helmet from "helmet";
import pinoHttp from "pino-http";
import { rateLimit } from "express-rate-limit";
import { config } from "./config/config.js";
import booksRouter from "./routes/booksRouter.js";
import membersRouter from "./routes/membersRouter.js";
import loansRouter from "./routes/loansRouter.js";
import { errorHandler, notFoundHandler } from "./middlewares/errorHandler.js";

export const app=express();
app.use(pinoHttp({ level: config.logLevel, redact:["req.headers.authorization","req.headers.cookie"] }));
app.use(helmet());
app.use(cors({ origin: config.corsOrigin }));
app.use(rateLimit({
  windowMs: config.rateLimitWindowMs,
  limit: config.rateLimitMax,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  handler: (_req, res) => {
    res.status(429).json({
      error: { code: "RATE_LIMIT_EXCEEDED", message: "Too many requests; try again later" },
    });
  },
}));
app.use(express.json({ limit: "100kb" }));
app.get("/health",(_req,res)=>res.json({status:"ok"}));
app.use("/api/books",booksRouter);
app.use("/api/members",membersRouter);
app.use("/api/loans",loansRouter);
app.use(notFoundHandler);
app.use(errorHandler);
