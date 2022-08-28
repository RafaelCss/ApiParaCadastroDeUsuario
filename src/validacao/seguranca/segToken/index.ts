import Jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv'
dotenv.config()

export  function criarToken(id: string) {
  const criarToken =  Jwt.sign({ userId: id }, process.env.SECRET as string, { expiresIn: 1000 })
  return `Bearer ${criarToken} `
}

export async function verificarToken(token: string) {
  console.log(token)
  const tokenLimpo =token.replace('Bearer ', '')
  const validaToken = await Jwt.verify(tokenLimpo, process.env.SECRET as string, (err , decode) =>{
    if(err){
      return err
    }
    return decode
  })
  return validaToken
}
