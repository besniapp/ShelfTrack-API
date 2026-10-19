import { app } from "./app.js";
import { config } from "./config/config.js";
import { connectDatabase } from "./config/database.js";

try {
  await connectDatabase();
  app.listen(config.port, () => console.log(`ShelfTrack API listening on ${config.port}`));
} catch (error) {
  console.error("Failed to start ShelfTrack API", error);
  process.exit(1);
}
