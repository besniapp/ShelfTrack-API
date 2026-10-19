import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("ShelfTrack API is running");
});

app.get("/api/books", (req, res) => {
  res.json([{ id: 1, title: "Node Patterns" }]);
});

app.listen(port, () => console.log(`Listening on ${port}`));
