import mongoose from "mongoose";

const loanSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true, index: true },
  member: { type: mongoose.Schema.Types.ObjectId, ref: "Member", required: true, index: true },
  borrowedAt: { type: Date, default: Date.now },
  dueAt: { type: Date, required: true, index: true },
  returnedAt: { type: Date, default: null, index: true },
}, { timestamps: true });

loanSchema.index({ member: 1, returnedAt: 1 });
loanSchema.index({ book: 1, returnedAt: 1 });
loanSchema.index(
  { book: 1, member: 1 },
  {
    unique: true,
    partialFilterExpression: { returnedAt: null },
    name: "unique_active_book_member_loan",
  }
);

export const Loan = mongoose.models.Loan || mongoose.model("Loan", loanSchema);
