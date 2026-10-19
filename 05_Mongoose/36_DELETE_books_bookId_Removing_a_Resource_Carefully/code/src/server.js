import "dotenv/config";
import express from "express";
import { connectDatabase } from "./config/database.js";

const app = express();
app.use(express.json());

import { Book } from "./models/Book.js";

app.get("/", (req, res) => {
  res.send("ShelfTrack API is running");
});

app.post("/api/books", async (req, res) => {
  const book = new Book({
    title: req.body.title,
    isbn: req.body.isbn,
    category: req.body.category,
    publishedYear: req.body.publishedYear,
    totalCopies: req.body.totalCopies,
    availableCopies: req.body.availableCopies
  });

  await book.save();

  res.status(201).json(book);
});

app.get("/api/books", async (req, res) => {
  const books = await Book.find({});
  res.status(200).json(books);
});

app.get("/api/books/:bookId", async (req, res) => {
  const { bookId } = req.params;
  const book = await Book.findById(bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json(book);
});

app.patch("/api/books/:bookId", async (req, res) => {
  const book = await Book.findById(req.params.bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (req.body.title !== undefined) {
    book.title = req.body.title;
  }

  if (req.body.publishedYear !== undefined) {
    book.publishedYear = req.body.publishedYear;
  }

  if (req.body.totalCopies !== undefined) {
    book.totalCopies = req.body.totalCopies;
  }

  if (req.body.availableCopies !== undefined) {
    book.availableCopies = req.body.availableCopies;
  }

  await book.save();
  res.status(200).json(book);
});

app.delete("/api/books/:bookId", async (req, res) => {
  const deletedBook = await Book.findByIdAndDelete(req.params.bookId);

  if (!deletedBook) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(204).end();
});

try {
  await connectDatabase(process.env.MONGODB_URI);
  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => console.log(`Listening on ${port}`));
} catch (error) {
  console.error("Failed to start ShelfTrack API", error);
  process.exitCode = 1;
}
