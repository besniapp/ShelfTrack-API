import mongoose from "mongoose";

const shelfSchema = new mongoose.Schema({
  floor: { type: Number, min: 0, required: true },
  code: { type: String, trim: true, required: true, maxlength: 40 },
}, { _id: false });

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, index: true },
  isbn: { type: String, required: true, trim: true, unique: true },
  authors: [{ type: String, required: true, trim: true }],
  category: { type: String, required: true, trim: true, lowercase: true },
  language: { type: String, default: "en", trim: true },
  publishedYear: { type: Number, min: 1450, max: 2100 },
  totalCopies: { type: Number, min: 0, required: true, default: 1 },
  availableCopies: { type: Number, min: 0, required: true, default: 1 },
  tags: [{ type: String, trim: true, lowercase: true }],
  shelf: { type: shelfSchema, default: undefined },
}, { timestamps: true, optimisticConcurrency: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });

bookSchema.index({ category: 1, title: 1, _id: 1 });
bookSchema.index({ availableCopies: 1, category: 1 });

bookSchema.virtual("isAvailable").get(function () {
  return this.availableCopies > 0;
});

bookSchema.methods.canBeBorrowed = function () {
  return this.availableCopies > 0;
};

bookSchema.statics.findAvailableByCategory = function (category) {
  return this.find({ category, availableCopies: { $gt: 0 } });
};

bookSchema.query.forCatalogue = function () {
  return this.select("title isbn authors category publishedYear availableCopies shelf")
    .sort({ title: 1, _id: 1 });
};

bookSchema.pre("findOneAndUpdate", function () {
  this.setOptions({ runValidators: true });
});

export const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);
