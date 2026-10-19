// src/routes/booksRouter.js
import { Router } from "express";
import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} from "../controllers/booksController.js";

import { validateBody } from "../middlewares/validateBody.js";
import { createBookSchema, updateBookSchema } from "../validators/bookSchemas.js";

const booksRouter = Router();

booksRouter.get("/", getBooks);
booksRouter.get("/:bookId", getBookById);
booksRouter.post("/", validateBody(createBookSchema), createBook);
booksRouter.patch("/:bookId", validateBody(updateBookSchema), updateBook);
booksRouter.delete("/:bookId", deleteBook);

export default booksRouter;
