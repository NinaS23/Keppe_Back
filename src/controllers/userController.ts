import { Request, Response } from "express";
import httpStatus from "../utils/httpStatus";
import * as userService from "../services/userService";

export async function signUp(req: Request, res: Response) {
    const { email, password, confirmPassword } : { 
        email:string, 
        password:string,
        confirmPassword: string
    } = req.body;
    await userService.signUp(email,password,confirmPassword);
    res.sendStatus(httpStatus.CREATED)
} 
