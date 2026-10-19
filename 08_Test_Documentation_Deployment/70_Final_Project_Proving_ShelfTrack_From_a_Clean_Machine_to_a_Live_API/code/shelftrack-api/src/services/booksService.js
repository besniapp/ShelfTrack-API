import { Book } from "../models/Book.js";
import { AppError } from "../utils/AppError.js";
import { escapeRegex, paginationMeta, parsePositiveInt } from "../utils/query.js";

function buildFilter(query) {
  const filter = {};
  if (typeof query.category === "string" && query.category.trim()) filter.category = query.category.trim().toLowerCase();
  if (typeof query.language === "string" && query.language.trim()) filter.language = query.language.trim();
  if (query.year !== undefined) {
    const year = Number(query.year);
    if (Number.isInteger(year)) filter.publishedYear = year;
  }
  if (query.minAvailable !== undefined) {
    const min = Number(query.minAvailable);
    if (Number.isInteger(min) && min >= 0) filter.availableCopies = { $gte: min };
  }
  if (typeof query.q === "string" && query.q.trim()) {
    const text = escapeRegex(query.q.trim());
    filter.$or = [
      { title: { $regex: text, $options: "i" } },
      { authors: { $regex: text, $options: "i" } },
    ];
  }
  return filter;
}

export async function listBooks(query = {}) {
  const page = parsePositiveInt(query.page, 1, 100000);
  const limit = parsePositiveInt(query.limit, 20, 100);
  const filter = buildFilter(query);
  const skip = (page - 1) * limit;
  const [items, totalItems] = await Promise.all([
    Book.find(filter).forCatalogue().skip(skip).limit(limit).lean(),
    Book.countDocuments(filter),
  ]);
  return { items, meta: paginationMeta({ page, limit, totalItems }) };
}

export async function getBook(bookId) {
  const book = await Book.findById(bookId);
  if (!book) throw new AppError(404, "BOOK_NOT_FOUND", "Book was not found");
  return book;
}

export async function createBook(input) {
  const normalized = { ...input };
  if (normalized.availableCopies === undefined) normalized.availableCopies = normalized.totalCopies;
  if (normalized.availableCopies > normalized.totalCopies) throw new AppError(400, "COPY_COUNT_INVALID", "availableCopies cannot exceed totalCopies");
  return Book.create(normalized);
}

export async function updateBook(bookId, patch) {
  const allowed = ["title","isbn","authors","category","language","publishedYear","totalCopies","availableCopies","tags","shelf"];
  const $set = Object.fromEntries(Object.entries(patch).filter(([key]) => allowed.includes(key)));
  if (Object.keys($set).length === 0) throw new AppError(400, "EMPTY_PATCH", "No supported fields were supplied");
  const current = await Book.findById(bookId).select("totalCopies availableCopies").lean();
  if (!current) throw new AppError(404, "BOOK_NOT_FOUND", "Book was not found");
  const total = $set.totalCopies ?? current.totalCopies;
  const available = $set.availableCopies ?? current.availableCopies;
  if (available > total) throw new AppError(400, "COPY_COUNT_INVALID", "availableCopies cannot exceed totalCopies");
  return Book.findByIdAndUpdate(bookId, { $set }, { returnDocument: "after", runValidators: true });
}

export async function deleteBook(bookId) {
  const book = await Book.findByIdAndDelete(bookId);
  if (!book) throw new AppError(404, "BOOK_NOT_FOUND", "Book was not found");
}
