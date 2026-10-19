// Import this helper into a database-connected script.
import { Book } from "../src/models/Book.js";

export async function decrementAvailableCopies(bookId) {
  return Book.updateOne(
    { _id: bookId, availableCopies: { $gt: 0 } },
    { $inc: { availableCopies: -1 } }
  );
}
