import { userDb } from "../../data/db";
import { Ilogin, IToken } from "../interface";
import { Request, Response } from 'express'
import { criarToken , verificarToken } from "./funcoes";


export async function validarDados(req: Request, res: Response) {
  const dados: Ilogin = req.body
  const resposta = await userDb.where('email', '==', dados.email).get()
  if (!resposta.empty) {
    resposta.forEach(item => {
      return res.send({
        dados: {
          auth: true,
          token: `Bearer ${criarToken(item.id)}`,
          usuario: dados.email
        }
      }).status(201).end()
    })
  }
  return res.json({
    erros: {
      auth : false,
      usuario: 'usuário não encontrado'
    }
  }).status(400)
}

export async function validarToken(req: Request, res: Response) {
  const token  = req.headers['application-authorization']
  if (token) {
  const resposta = await verificarToken(token as string)
  res.send(resposta).end()
  }
  return res.json({
    erros: {
      auth : false,
      usuario: 'usuário não encontrado'
    }
  }).status(400)
}



export default validarDados;

