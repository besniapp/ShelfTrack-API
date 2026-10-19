import "dotenv/config";
import mongoose from "mongoose";
import { connectDatabase } from "../src/config/database.js";
import { Book } from "../src/models/Book.js";

try {
  await connectDatabase(process.env.MONGODB_URI);
  const book = new Book({
    title: "Reliable Node Services", isbn: "9780000000001",
    category: "programming", publishedYear: 2026,
    totalCopies: 3, availableCopies: 3
  });
  await book.save();
  console.log(book);
} finally {
  await mongoose.disconnect();
}
