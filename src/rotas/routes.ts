import { Router } from 'express';
import { Request, Response } from 'express';
import ValidarDadosUser from "../validacao";
import { Ilogin } from "../interface";

export const router = Router();

router.post('/', async (req: Request, res: Response) => {
  const dados: Ilogin = req.body;
  const dadosValidos =  await ValidarDadosUser.validar(dados)
  res.json(dadosValidos).status(201);
})


router.get('/', async (req: Request, res: Response) => {
  res.send('Dados validos');
})

