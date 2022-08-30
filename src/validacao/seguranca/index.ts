import { userDb } from "../../data/db";
import { Ilogin, ValToken } from "../../util/interface";
import { Request, Response, NextFunction } from 'express'
import { criarToken, verificarToken } from "./segToken";

//#region Validar usuario ao logar
export async function validarDados(req: Request, res: Response, next: NextFunction) {
  const dados: Ilogin = req.body
  const resposta = await userDb
    .where('email', '==', dados.email)
    .where('senha', '==', dados.senha).get()
  if (!resposta.empty) {
    resposta.forEach(item => {
      return res.send({
        dados: {
          auth: true,
          token: criarToken(item.id),
          usuario: dados.email
        }
      }).status(201).end()
    })
    next()

  } else {
    return res.json({
      erros: {
        auth: false,
        usuario: 'usuário não encontrado'
      }
    }).status(400)
  }
  next()
}

//#endregion

//#region  Verificar se o Token está valido
export async function validarToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization']
  if (token) {
    const resposta : ValToken= await verificarToken(token as string)
    .then(resp => {return resp})
    .catch(err => { return err})
    if(resposta.name === "TokenExpiredError"){
      res.json('Acesso Negado')
    }
    next()
  }
  else {
     res.json({
      erros: {
        auth: false,
        usuario: 'usuário não encontrado'
      }
    }).status(400)
  }
}

//#endregion

