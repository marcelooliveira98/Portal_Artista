import jwt from "jsonwebtoken";
import dotenv from "dotenv"

export function criar_token(email_user)
{
    return jwt.sign({user: email_user}, process.env.PALAVRA_CHAVE, {expiresIn: "1h"})
}

export function verificarToken(token) 
{
    return jwt.verify(token, process.env.PALAVRA_CHAVE);
}
