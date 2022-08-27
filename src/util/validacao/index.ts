import { userDb } from "../../data/db";
import { Ilogin } from "../interface";
import { Request, Response, NextFunction } from 'express'
import { criarToken, verificarToken } from "./funcoes";

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
    const resposta = verificarToken(token as string)
    return res.send(resposta).end()
  }
  else {
    return res.json({
      erros: {
        auth: false,
        usuario: 'usuário não encontrado'
      }
    }).status(400)
  }
}
//#endregion

