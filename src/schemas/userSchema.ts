import joi from "joi";

export const signUpSchema = joi.object({
    email: joi.string().email().max(30).required(),
    password: joi.string().min(9).required(),
    confirmPassword: joi.ref('password')
})