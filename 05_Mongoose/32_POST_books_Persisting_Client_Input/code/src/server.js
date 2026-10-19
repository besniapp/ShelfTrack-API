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

try {
  await connectDatabase(process.env.MONGODB_URI);
  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => console.log(`Listening on ${port}`));
} catch (error) {
  console.error("Failed to start ShelfTrack API", error);
  process.exitCode = 1;
}
