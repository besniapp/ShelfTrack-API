// src/config/database.js
import mongoose from "mongoose";

export async function connectDatabase(uri) {
  await mongoose.connect(uri);
}
