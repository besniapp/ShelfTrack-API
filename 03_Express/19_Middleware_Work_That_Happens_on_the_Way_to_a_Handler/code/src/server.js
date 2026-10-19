import express from "express";

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ShelfTrack API is running");
});

app.get("/api/books", (req, res) => res.json([]));
app.post("/api/books", (req, res) => {
  res.status(201).json({ data: req.body });
});

app.listen(port, () => console.log(`Listening on ${port}`));
