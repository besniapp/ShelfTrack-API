// src/server.js
import express from "express";
import booksRouter from "./routes/booksRouter.js";

import { requestLogger } from "./middlewares/requestLogger.js";

import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
app.use(requestLogger);

app.use(express.json());
app.use("/api/books", booksRouter);

app.use(errorHandler);

export default app;
