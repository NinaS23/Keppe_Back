import { Router } from "express";
import { signIn, signUp } from "../controllers/userController";
import { signInSchema, signUpSchema } from "../schemas/userSchema";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaGeneric";

const userRouter = Router();

userRouter.post("/sign-up", validateSchemaMiddleware(signUpSchema), signUp);
userRouter.post("/sign-in", validateSchemaMiddleware(signInSchema), signIn);

export default userRouter;