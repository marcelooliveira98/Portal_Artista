import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); 

// Função para criar o token
export function criar_token(email_user) {
  return jwt.sign(
    { user: email_user }, 
    process.env.PALAVRA_CHAVE, 
    { expiresIn: "1h" } 
  );
}

// Função para verificar a validade do token
export function verificarToken(token) {
  try {
    return jwt.verify(token, process.env.PALAVRA_CHAVE); 
  } catch (error) {
    throw new Error("Token inválido ou expirado"); 
  }
}

// Middleware para validar o token em rotas protegidas
export function autenticarToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  const token = authHeader.split(" ")[1]; 

  try {
    const decoded = verificarToken(token); 
    req.user = decoded.user; 
    next(); 
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
}
