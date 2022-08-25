import Jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv'
dotenv.config()

export  function criarToken(id: string) {
  const criarToken =  Jwt.sign({ userId: id }, process.env.SECRET as string, { expiresIn: 200 })
  return criarToken
}

export  function verificarToken(token: string) {
  const validaToken = Jwt.verify(token, process.env.SECRET as string, (err , decode) =>{
    if(err){
      return err
    }
    return decode
  })
  return validaToken
}
