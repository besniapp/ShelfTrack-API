import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"],
    trim: true,
    minlength: [2, "title must contain at least 2 characters"]
  },
  isbn: {
    type: String,
    required: [true, "isbn is required"],
    trim: true,
    unique: true
  },
  shelf: {
    type: new mongoose.Schema({
      floor: { type: Number, min: 0, required: true },
      code: { type: String, trim: true, required: true }
    }, { _id: false }),
    default: undefined
  },
  language: { type: String, default: "en", trim: true },
  authors: [{ type: String, trim: true }],
  category: {
    type: String,
    required: true,
    enum: {
      values: ["programming", "design", "data", "networks"],
      message: "unsupported category"
    }
  },
  publishedYear: {
    type: Number,
    min: [1450, "publishedYear is too early"]
  },
  totalCopies: {
    type: Number,
    min: [0, "totalCopies cannot be negative"],
    default: 0
  },
  availableCopies: {
    type: Number,
    min: [0, "availableCopies cannot be negative"],
    default: 0
  }
}, { strict: true, timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } });

bookSchema.index({ category: 1, title: 1 });
bookSchema.index({ category: 1, publishedYear: -1, _id: 1 });
bookSchema.query.forCatalogue = function () {
  return this
    .select("title isbn authors category publishedYear availableCopies")
    .sort({ title: 1, _id: 1 });
};

bookSchema.pre("findOneAndUpdate", function () {
  this.setOptions({ runValidators: true });
});

bookSchema.virtual("isAvailable").get(function () {
  return this.availableCopies > 0;
});

bookSchema.methods.canBeLoaned = function () {
  return this.availableCopies > 0;
};

bookSchema.statics.findAvailableByCategory = function (category) {
  return this.find({
    category,
    availableCopies: { $gt: 0 }
  });
};


export const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);
