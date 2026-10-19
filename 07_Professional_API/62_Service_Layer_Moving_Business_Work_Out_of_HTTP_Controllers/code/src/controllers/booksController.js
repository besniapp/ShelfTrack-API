import * as booksService from "../services/booksService.js";

export async function getBooks(req, res) {
  const result = await booksService.listBooks(req.query);
  res.json({ data: result.items, meta: result.meta });
}
export async function getBookById(req, res) {
  res.json({ data: await booksService.getBook(req.params.bookId) });
}
export async function createBook(req, res) {
  res.status(201).json({ data: await booksService.createBook(req.body) });
}
export async function updateBook(req, res) {
  res.json({ data: await booksService.updateBook(req.params.bookId, req.body) });
}
export async function deleteBook(req, res) {
  await booksService.deleteBook(req.params.bookId);
  res.status(204).end();
}
