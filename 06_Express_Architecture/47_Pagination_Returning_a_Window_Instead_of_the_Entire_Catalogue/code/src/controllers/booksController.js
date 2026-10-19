import { Book } from "../models/Book.js";

export async function getBooks(req, res) {
  const page = 3;
  const limit = 10;
  const skip = (page - 1) * limit;
  const books = await Book.find({}).sort({ publishedYear: -1, _id: 1 }).skip(skip).limit(limit);
  res.json(books);
}

export async function getBookById(req, res) {
  const book = await Book.findById(req.params.bookId);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
}

export async function createBook(req, res) {
  const book = await Book.create(req.body);
  res.status(201).json(book);
}

export async function updateBook(req, res) {
  const book = await Book.findById(req.params.bookId);
  if (!book) return res.status(404).json({ message: "Book not found" });

  const allowed = ["title", "publishedYear", "category", "totalCopies", "availableCopies"];
  for (const field of allowed) {
    if (req.body[field] !== undefined) book[field] = req.body[field];
  }

  await book.save();
  res.json(book);
}

export async function deleteBook(req, res) {
  const book = await Book.findByIdAndDelete(req.params.bookId);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.status(204).end();
}
