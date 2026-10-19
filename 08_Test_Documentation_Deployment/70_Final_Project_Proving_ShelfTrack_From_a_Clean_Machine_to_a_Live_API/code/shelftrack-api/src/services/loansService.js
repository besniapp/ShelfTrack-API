import { Book } from "../models/Book.js";
import { Loan } from "../models/Loan.js";
import { Member } from "../models/Member.js";
import { AppError } from "../utils/AppError.js";

const populateLoan = (query) => query.populate("book", "title isbn shelf").populate("member", "name email");

export async function listLoans({ active } = {}) {
  const filter = active === "true"
    ? { returnedAt: null }
    : active === "false"
      ? { returnedAt: { $ne: null } }
      : {};
  return populateLoan(Loan.find(filter).sort({ borrowedAt: -1, _id: -1 })).lean();
}

export async function getLoan(loanId) {
  const loan = await populateLoan(Loan.findById(loanId));
  if (!loan) throw new AppError(404, "LOAN_NOT_FOUND", "Loan was not found");
  return loan;
}

export async function checkoutBook({ bookId, memberId, loanDays = 14 }) {
  const [book, member, existing] = await Promise.all([
    Book.findById(bookId),
    Member.findById(memberId),
    Loan.findOne({ book: bookId, member: memberId, returnedAt: null }).lean(),
  ]);
  if (!book) throw new AppError(404, "BOOK_NOT_FOUND", "Book was not found");
  if (!member) throw new AppError(404, "MEMBER_NOT_FOUND", "Member was not found");
  if (!member.active) throw new AppError(409, "MEMBER_INACTIVE", "Inactive members cannot borrow books");
  if (existing) throw new AppError(409, "ACTIVE_LOAN_EXISTS", "Member already has this book on loan");

  // Conditional atomic decrement: only succeeds while a copy is available.
  const inventory = await Book.updateOne(
    { _id: bookId, availableCopies: { $gt: 0 } },
    { $inc: { availableCopies: -1 } }
  );
  if (inventory.modifiedCount !== 1) throw new AppError(409, "BOOK_UNAVAILABLE", "No copy is currently available");

  try {
    const dueAt = new Date(Date.now() + loanDays * 24 * 60 * 60 * 1000);
    const loan = await Loan.create({ book: bookId, member: memberId, dueAt });
    return getLoan(loan._id);
  } catch (error) {
    // Compensation for this learning project. A production design that requires
    // strict multi-document atomicity should use a MongoDB transaction.
    await Book.updateOne({ _id: bookId }, { $inc: { availableCopies: 1 } });
    if (error?.code === 11000) {
      throw new AppError(409, "ACTIVE_LOAN_EXISTS", "Member already has this book on loan");
    }
    throw error;
  }
}

export async function returnLoan(loanId) {
  const loan = await Loan.findOneAndUpdate(
    { _id: loanId, returnedAt: null },
    { $set: { returnedAt: new Date() } },
    { returnDocument: "after", runValidators: true }
  );
  if (!loan) {
    const exists = await Loan.exists({ _id: loanId });
    if (!exists) throw new AppError(404, "LOAN_NOT_FOUND", "Loan was not found");
    throw new AppError(409, "LOAN_ALREADY_RETURNED", "Loan has already been returned");
  }
  await Book.updateOne({ _id: loan.book }, { $inc: { availableCopies: 1 } });
  return getLoan(loan._id);
}
