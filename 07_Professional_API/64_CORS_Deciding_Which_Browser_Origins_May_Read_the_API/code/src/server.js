// src/server.js
import express from "express";
import booksRouter from "./routes/booksRouter.js";

import { requestLogger } from "./middlewares/requestLogger.js";

import { errorHandler } from "./middlewares/errorHandler.js";

import cors from "cors";
import { config } from "./config/config.js";

const app = express();
app.use(cors({ origin: config.corsOrigin }));
app.use(requestLogger);

app.use(express.json());
app.use("/api/books", booksRouter);

app.use(errorHandler);

export default app;
