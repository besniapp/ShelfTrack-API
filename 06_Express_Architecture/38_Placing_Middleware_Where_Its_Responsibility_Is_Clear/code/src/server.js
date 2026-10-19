// src/server.js
import express from "express";
import booksRouter from "./routes/booksRouter.js";

import { requestLogger } from "./middlewares/requestLogger.js";

const app = express();
app.use(requestLogger);

app.use(express.json());
app.use("/api/books", booksRouter);

export default app;
