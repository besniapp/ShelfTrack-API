import Joi from "joi";

export const createMemberSchema = Joi.object({
  name: Joi.string().trim().min(1).max(120).required(),
  email: Joi.string().trim().email().required(),
  active: Joi.boolean(),
}).unknown(false);

export const updateMemberSchema = Joi.object({
  name: Joi.string().trim().min(1).max(120),
  email: Joi.string().trim().email(),
  active: Joi.boolean(),
}).min(1).unknown(false);
