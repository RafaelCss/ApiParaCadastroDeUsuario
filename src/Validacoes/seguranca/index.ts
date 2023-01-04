import { Request, Response, NextFunction } from 'express'
import { userDb } from "../../data/db";
import { Ilogin } from "../../util/interface";
import VerificarCampos from '../../util/mensagens/mensagens';
import Validar from '../funcoes/validar';
import { criarToken, verificarToken } from "./segToken";

//#region Validar usuario ao logar
export async function validarDados(req: Request, res: Response, next: NextFunction) {
  const dados: Ilogin = req.body
  const validacao = new VerificarCampos()
  const email = validacao.verificarEmail(dados.email)
  const senha = validacao.verificarSenha(dados.senha)

  if (typeof email === 'string' && typeof senha === 'string') {
    const resposta = new Validar();
    if (!resposta.empty) {
      resposta.forEach(item => {
        if (item.id.length > 0) {
          const data = item.data();
          const nome = [data].map(item => item.nome)
          return res.json({
            dados: {
              auth: true,
              token: criarToken(item.id),
              usuario: nome
            }
          }).status(201).end()
        }
      })
    } else {
      res.json({
        dados: {
          auth: false,
          token: undefined,
          usuario: undefined,
        }
      }).status(400).end()
    }
  }else {
    res.json({
      dados: {
        auth: false,
        token: undefined,
        usuario: undefined,
        erros: {
          senha,
          email
        }
      }
    }).status(400).end()
  }
}
//#endregion

//#region  Verificar se o Token está valido
export async function validarToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization']
  if (token) {
    const resposta = await verificarToken(token as string)
      .then(resp => { return resp })
      .catch(err => { return err })
    if (resposta === 'token invalido') {
      res.json({
        erros: {
          auth: false,
          usuario: 'usuário não encontrado'
        }
      }).status(400)
    } else {
      return next()
    }
  } else {
    res.json({
      erros: {
        auth: false,
        usuario: 'usuário não encontrado'
      }
    }).status(400)
  }
}

//#endregion

