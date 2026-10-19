import mongoose from "mongoose";

// Loan.js
const loanSchema = new mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true
  },
  member: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Member",
    required: true
  },
  borrowedAt: { type: Date, default: Date.now },
  dueAt: { type: Date, required: true },
  returnedAt: { type: Date, default: null }
}, { timestamps: true });

export const Loan = mongoose.models.Loan || mongoose.model("Loan", loanSchema);
