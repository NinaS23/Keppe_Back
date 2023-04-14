import { Router } from "express";
import { signUp } from "../controllers/userController";
import { signUpSchema } from "../schemas/userSchema";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaGeneric";

const userRouter = Router();

userRouter.post("/sign-up", validateSchemaMiddleware(signUpSchema), signUp);

export default userRouter;