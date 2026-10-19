import "dotenv/config";
import express from "express";
import { connectDatabase } from "./config/database.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ShelfTrack API is running");
});

try {
  await connectDatabase(process.env.MONGODB_URI);
  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => console.log(`Listening on ${port}`));
} catch (error) {
  console.error("Failed to start ShelfTrack API", error);
  process.exitCode = 1;
}
