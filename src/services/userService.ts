import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import userRepository from "../repositories/userRepository";

export async function signUp(
    email:string, 
    password:string, 
    confirmPassword:string
) {
    const SALT = 10;
    const codedPassword = bcrypt.hashSync(password, SALT);
    await isUserExistent(email, "insert")
    await userRepository.insertUser(email,codedPassword);
}


async function isUserExistent(email: string, type: string) {
    const user = await userRepository.getUserByEmail(email);
    if (user.rowCount && type === "insert") {
        throw { code: "unauthorized", message: "email alredy exist" }
    }
    return user;
}