import { Request, Response } from "express";
import httpStatus from "../utils/httpStatus";

export async function signUp(req: Request, res: Response) {
    res.sendStatus(httpStatus.CREATED)
} 
