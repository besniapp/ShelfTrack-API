import Joi from "joi";

const shelfSchema = Joi.object({
  floor: Joi.number().integer().min(0).required(),
  code: Joi.string().trim().min(1).max(40).required(),
}).unknown(false);

const fields = {
  title: Joi.string().trim().min(1).max(200),
  isbn: Joi.string().trim().min(10).max(20),
  authors: Joi.array().items(Joi.string().trim().min(1).max(120)).min(1),
  category: Joi.string().trim().min(1).max(80),
  language: Joi.string().trim().min(2).max(10),
  publishedYear: Joi.number().integer().min(1450).max(2100),
  totalCopies: Joi.number().integer().min(0),
  availableCopies: Joi.number().integer().min(0),
  tags: Joi.array().items(Joi.string().trim().min(1).max(40)).max(20),
  shelf: shelfSchema,
};

export const createBookSchema = Joi.object({
  ...fields,
  title: fields.title.required(),
  isbn: fields.isbn.required(),
  authors: fields.authors.required(),
  category: fields.category.required(),
  totalCopies: fields.totalCopies.required(),
}).unknown(false);

export const updateBookSchema = Joi.object(fields).min(1).unknown(false);
