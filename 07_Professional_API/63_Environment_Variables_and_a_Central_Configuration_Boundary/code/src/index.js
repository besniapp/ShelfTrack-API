import app from "./server.js";
import { config } from "./config/config.js";
import { connectDatabase } from "./config/database.js";

try {
  await connectDatabase(config.mongodbUri);
  app.listen(config.port, () => console.log(`Listening on ${config.port}`));
} catch (error) {
  console.error("Failed to start ShelfTrack API", error);
  process.exitCode = 1;
}
