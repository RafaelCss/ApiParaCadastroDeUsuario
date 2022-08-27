import { userDb } from "../../data/db";
<<<<<<< HEAD
import { Ilogin } from "../interface";
import { Request, Response, NextFunction } from 'express'
import { criarToken, verificarToken } from "./funcoes";

//#region Validar usuario ao logar
export async function validarDados(req: Request, res: Response, next: NextFunction) {
  const dados: Ilogin = req.body
  const resposta = await userDb
    .where('email', '==', dados.email)
    .where('senha', '==', dados.senha).get()
=======
import { Ilogin, IToken } from "../interface";
import { Request, Response, NextFunction } from 'express'
import { criarToken, verificarToken } from "./funcoes";


export async function validarDados(req: Request, res: Response, next: NextFunction) {
  const dados: Ilogin = req.body
  const resposta = await userDb.where('email', '==', dados.email).get()
>>>>>>> 0f390b883e700821059064a1edfb1c0560ecfddc
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
<<<<<<< HEAD
  } else {
=======
  }else {
>>>>>>> 0f390b883e700821059064a1edfb1c0560ecfddc

    return res.json({
      erros: {
        auth: false,
        usuario: 'usuário não encontrado'
      }
    }).status(400)
  }
  next()
}
<<<<<<< HEAD
//#endregion
//#region  Verificar se o Token está valido
=======

>>>>>>> 0f390b883e700821059064a1edfb1c0560ecfddc
export async function validarToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization']
  if (token) {
    const resposta = verificarToken(token as string)
    return res.send(resposta).end()
  }
<<<<<<< HEAD
  else {
=======
  else{
>>>>>>> 0f390b883e700821059064a1edfb1c0560ecfddc
    return res.json({
      erros: {
        auth: false,
        usuario: 'usuário não encontrado'
      }
    }).status(400)
  }
}
<<<<<<< HEAD
//#endregion
=======

>>>>>>> 0f390b883e700821059064a1edfb1c0560ecfddc

