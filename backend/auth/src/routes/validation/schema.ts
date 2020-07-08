import Joi from "@hapi/joi";

export const registerSchema = Joi.object().keys({
  email: Joi.string()
    .lowercase()
    .trim()
    .max(320)
    .email({ minDomainSegments: 2 })
    .required(),
  firstName: Joi.string().trim().max(15).required(),
  lastName: Joi.string().trim().max(15).required(),
  password: Joi.string().trim().min(8).max(70).required()
});

export const loginSchema = Joi.object().keys({
  email: Joi.string()
    .lowercase()
    .trim()
    .max(320)
    .email({ minDomainSegments: 2 })
    .required(),
  password: Joi.string().trim().min(8).max(70).required(),
  keepSessionActive: Joi.boolean().required(),
  deviceName: Joi.string().trim().min(2).max(70).required(),
  agent: Joi.string().trim().min(2).max(70).required()
});
