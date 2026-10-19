import Joi from "joi";

export const createLoanSchema = Joi.object({
  bookId: Joi.string().hex().length(24).required(),
  memberId: Joi.string().hex().length(24).required(),
  loanDays: Joi.number().integer().min(1).max(60).default(14),
}).unknown(false);
