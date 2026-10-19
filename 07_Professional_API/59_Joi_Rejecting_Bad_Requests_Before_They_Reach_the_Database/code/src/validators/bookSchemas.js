import Joi from "joi";

const shelfSchema = Joi.object({
  floor: Joi.number().integer().min(0).required(),
  code: Joi.string().trim().min(1).max(40).required()
}).unknown(false);

export const createBookSchema = Joi.object({
  title: Joi.string().trim().min(1).max(200).required(),
  isbn: Joi.string().trim().min(10).max(20).required(),
  authors: Joi.array()
    .items(Joi.string().trim().min(1).max(120))
    .min(1)
    .required(),
  category: Joi.string().trim().min(1).max(80).required(),
  language: Joi.string().trim().min(2).max(10),
  publishedYear: Joi.number().integer().min(1450).max(2100),
  totalCopies: Joi.number().integer().min(0).required(),
  availableCopies: Joi.number().integer().min(0),
  tags: Joi.array().items(Joi.string().trim().min(1).max(40)).max(20),
  shelf: shelfSchema
}).unknown(false);

export const updateBookSchema = createBookSchema
  .fork(
    ["title", "isbn", "authors", "category", "totalCopies"],
    (schema) => schema.optional()
  )
  .min(1);
