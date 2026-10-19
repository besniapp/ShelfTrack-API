import { Loan } from "../src/models/Loan.js";
import "../src/models/Book.js";
import "../src/models/Member.js";

// Use from a script after connecting to MongoDB; pass an existing loan id.
export async function readLoan(loanId) {
  return Loan.findById(loanId)
    .populate("book", "title isbn")
    .populate("member", "name email");
}
