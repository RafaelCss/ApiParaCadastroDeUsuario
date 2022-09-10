import Jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv'
dotenv.config()

export  function criarToken(id: string) {
  const criarToken =  Jwt.sign({ userId: id }, process.env.SECRET as string, { expiresIn: 10000 })
  return `Bearer ${criarToken} `
}

export async function verificarToken(token: string) {
  const tokenLimpo =token.replace('Bearer ','')
  console.log(tokenLimpo)
  const validaToken =  Jwt.verify(tokenLimpo, process.env.SECRET as string, async (err , decode) =>{
    if(err){
      return err
    }
    console.log(decode)
    return decode
  })
  return validaToken
}
