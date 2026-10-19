import { Book } from "../models/Book.js";
import { parsePositiveInteger } from "../utils/parsePagination.js";
import { buildBookFilter } from "../utils/buildBookFilter.js";

export async function getBooks(req, res) {
  const page = parsePositiveInteger(req.query.page, 1);
  const limit = parsePositiveInteger(req.query.limit, 20, 100);
  const skip = (page - 1) * limit;
  const filter = buildBookFilter(req.query);
  const [books, totalItems] = await Promise.all([
    Book.find(filter).select("title isbn authors category publishedYear availableCopies").sort({ title: 1, _id: 1 }).skip(skip).limit(limit).lean(),
    Book.countDocuments(filter)
  ]);
  res.json({ data: books, meta: { page, limit, totalItems, totalPages: Math.ceil(totalItems / limit) } });
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
  const allowed = ["title", "category", "publishedYear", "totalCopies"];
  const changes = {};
  for (const key of allowed) {
    if (req.body[key] !== undefined) changes[key] = req.body[key];
  }
  const book = await Book.findByIdAndUpdate(req.params.bookId, { $set: changes }, { returnDocument: "after", runValidators: true });
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
}

export async function deleteBook(req, res) {
  const book = await Book.findByIdAndDelete(req.params.bookId);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.status(204).end();
}
