// src/server.js
import express from "express";
import booksRouter from "./routes/booksRouter.js";

import { requestLogger } from "./middlewares/requestLogger.js";

import { errorHandler } from "./middlewares/errorHandler.js";

import cors from "cors";
import { config } from "./config/config.js";

import helmet from "helmet";
import { apiLimiter } from "./middlewares/rateLimiter.js";

const app = express();
app.use(helmet());
app.use(cors({ origin: config.corsOrigin }));
app.use(requestLogger);

app.get("/health", (req, res) => res.status(200).json({ status: "ok" }));

app.use(apiLimiter);
app.use(express.json({ limit: "100kb" }));
app.use("/api/books", booksRouter);

app.use(errorHandler);

export default app;
