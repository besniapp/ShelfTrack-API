// src/routes/booksRouter.js
import { Router } from "express";
import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} from "../controllers/booksController.js";

const booksRouter = Router();

booksRouter.get("/", getBooks);
booksRouter.get("/:bookId", getBookById);
booksRouter.post("/", createBook);
booksRouter.patch("/:bookId", updateBook);
booksRouter.delete("/:bookId", deleteBook);

export default booksRouter;
