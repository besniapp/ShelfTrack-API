import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("ShelfTrack API is running");
});
app.get("/api/books", (req, res) => {
  res.json({ message: "List books" });
});

app.post("/api/books", (req, res) => {
  res.status(201).json({ message: "Create a book" });
});

app.put("/api/books/:bookId", (req, res) => {
  res.json({ message: "Replace a book representation" });
});

app.patch("/api/books/:bookId", (req, res) => {
  res.json({ message: "Change selected book fields" });
});

app.delete("/api/books/:bookId", (req, res) => {
  res.status(204).end();
});

app.listen(port, () => console.log(`Listening on ${port}`));
