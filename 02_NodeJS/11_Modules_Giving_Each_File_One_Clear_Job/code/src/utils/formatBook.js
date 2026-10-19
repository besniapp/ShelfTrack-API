// src/utils/formatBook.js
export function formatBook(book) {
  return `${book.title} (${book.publishedYear ?? "unknown year"})`;
}
