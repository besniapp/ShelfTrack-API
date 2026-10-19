import { Book } from "../models/Book.js";
import { AppError } from "../utils/AppError.js";
import { parsePositiveInteger } from "../utils/parsePagination.js";
import { buildBookFilter } from "../utils/buildBookFilter.js";

export async function listBooks(query = {}) {
  const page = parsePositiveInteger(query.page, 1);
  const limit = parsePositiveInteger(query.limit, 20, 100);
  const skip = (page - 1) * limit;
  const filter = buildBookFilter(query);
  const [items, totalItems] = await Promise.all([
    Book.find(filter).forCatalogue().skip(skip).limit(limit).lean(),
    Book.countDocuments(filter)
  ]);
  return { items, meta: { page, limit, totalItems, totalPages: Math.ceil(totalItems / limit) } };
}

export async function getBook(bookId) {
  const book = await Book.findById(bookId);
  if (!book) throw new AppError(404, "BOOK_NOT_FOUND", "Book not found");
  return book;
}

export async function createBook(input) {
  return Book.create(input);
}

export async function updateBook(bookId, input) {
  const allowed = ["title", "isbn", "authors", "category", "language", "publishedYear", "totalCopies", "availableCopies", "tags", "shelf"];
  const changes = Object.fromEntries(Object.entries(input).filter(([key]) => allowed.includes(key)));
  if (!Object.keys(changes).length) throw new AppError(400, "EMPTY_PATCH", "No supported fields supplied");
  const book = await Book.findByIdAndUpdate(bookId, { $set: changes }, { returnDocument: "after", runValidators: true });
  if (!book) throw new AppError(404, "BOOK_NOT_FOUND", "Book not found");
  return book;
}

export async function deleteBook(bookId) {
  const book = await Book.findByIdAndDelete(bookId);
  if (!book) throw new AppError(404, "BOOK_NOT_FOUND", "Book not found");
}
