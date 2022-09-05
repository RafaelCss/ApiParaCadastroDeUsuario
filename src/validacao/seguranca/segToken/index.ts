import Jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv'
import { json } from 'express';
dotenv.config()

export  function criarToken(id: string) {
  const criarToken =  Jwt.sign({ userId: id }, process.env.SECRET as string, { expiresIn: 1000 })
  return `Bearer ${criarToken} `
}

export async function verificarToken(token: string) {
  const tokenLimpo =token.replace('Bearer ', '')
  const validaToken = Jwt.verify(tokenLimpo, process.env.SECRET as string, (err , decode) =>{
    if(err){
      return JSON.stringify(err)
    }
    return JSON.stringify(decode)
  })
  return validaToken
}
