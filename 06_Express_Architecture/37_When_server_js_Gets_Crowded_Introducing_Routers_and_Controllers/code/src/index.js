// src/index.js
import "dotenv/config";
import app from "./server.js";
import { connectDatabase } from "./config/database.js";

const port = Number(process.env.PORT) || 3000;

await connectDatabase(process.env.MONGODB_URI);
app.listen(port, () => console.log(`Listening on ${port}`));
