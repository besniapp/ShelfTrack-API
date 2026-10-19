import mongoose from "mongoose";

// Member.js
const memberSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true }
}, { timestamps: true });

export const Member = mongoose.models.Member || mongoose.model("Member", memberSchema);
