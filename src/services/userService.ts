import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

export async function signUp(
    email:string, 
    password:string, 
    confirmPassword:string
) {
    
    console.log(email,password,confirmPassword);

}