// src/models/Book.js
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  isbn: { type: String, required: true, trim: true },
  publishedYear: { type: Number, min: 1450 },
  category: { type: String, required: true },
  totalCopies: { type: Number, min: 0, default: 0 },
  availableCopies: { type: Number, min: 0, default: 0 }
});

export const Book =
  mongoose.models.Book || mongoose.model("Book", bookSchema);
