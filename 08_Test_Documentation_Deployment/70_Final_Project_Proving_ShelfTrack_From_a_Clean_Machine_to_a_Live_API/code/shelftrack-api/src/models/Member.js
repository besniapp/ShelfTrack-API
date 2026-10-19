import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true, unique: true },
  active: { type: Boolean, default: true },
}, { timestamps: true });

export const Member = mongoose.models.Member || mongoose.model("Member", memberSchema);
