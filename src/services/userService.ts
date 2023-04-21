import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import userRepository from "../repositories/userRepository";

export async function signUp(
    email:string, 
    password:string
) {
    const SALT = 10;
    const codedPassword = bcrypt.hashSync(password, SALT);
    await isUserExistent(email, "insert");
    await userRepository.insertUser(email,codedPassword);
}

export async function signIn(
    email:string, 
    password:string
) {
   let userSearch = await isUserExistent(email,"select");
   await isPasswordCorrect(password, userSearch.rows[0].password);
}


async function isUserExistent(email: string, type: string) {
    const user = await userRepository.getUserByEmail(email);
    if (user.rowCount === 1 && type === "insert") {
        throw { code: "unauthorized", message: "email já existe" };
    }
    if (user.rowCount === 0 && type === "select") {
        throw { code: "not-found", message: "usuário não encontrado" };
    }
    return user;
}

async function isPasswordCorrect(inputPassword: string, userPassword: string) {
    const passwordVerify = bcrypt.compareSync(inputPassword, userPassword);
    if (!passwordVerify){
        throw { 
            code: "unauthorized", 
            message: "usuário ou senha estão incorretos" 
        };
    }
}
