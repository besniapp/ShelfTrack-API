import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"],
    trim: true,
    minlength: [2, "title must contain at least 2 characters"]
  },
  isbn: {
    type: String,
    required: [true, "isbn is required"],
    trim: true,
    unique: true
  },
  language: { type: String, default: "en", trim: true },
  authors: [{ type: String, trim: true }],
  category: {
    type: String,
    required: true,
    enum: {
      values: ["programming", "design", "data", "networks"],
      message: "unsupported category"
    }
  },
  publishedYear: {
    type: Number,
    min: [1450, "publishedYear is too early"]
  },
  totalCopies: {
    type: Number,
    min: [0, "totalCopies cannot be negative"],
    default: 0
  },
  availableCopies: {
    type: Number,
    min: [0, "availableCopies cannot be negative"],
    default: 0
  }
}, { strict: true, timestamps: true });

bookSchema.index({ category: 1, title: 1 });
bookSchema.index({ category: 1, publishedYear: -1, _id: 1 });

export const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);
