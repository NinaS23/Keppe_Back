import { Request, Response } from "express";
import httpStatus from "../utils/httpStatus";
import * as userService from "../services/userService";

export async function signUp(req: Request, res: Response) {
    const { email, password } : { 
        email:string, 
        password:string
    } = req.body;
    await userService.signUp(email,password);
    res.sendStatus(httpStatus.CREATED);
} 

export async function signIn(req: Request, res: Response) {
    const { email, password } : { 
        email:string, 
        password:string
    } = req.body;
    let token = await userService.signIn(email,password);
    res.status(httpStatus.OK).send(token);
} 

