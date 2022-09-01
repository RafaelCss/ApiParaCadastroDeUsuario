import { Router } from 'express';
import { salvarUsuario } from '../Controllers/Cadastro';
import { Request, Response, NextFunction } from 'express';
import { validarDados, validarToken } from '../validacao/seguranca';
import { Cadastro, Produtos } from '../util/interface';
import { pegarProdutos, salvarProduto } from '../Controllers/Produtos';

const router = Router();

router.post('/login', validarDados)

router.post('/cadastro/usuario', async (req: Request, res: Response, next: NextFunction) => {
  await salvarUsuario(req.body as Cadastro)
    .then(retorno => res.json(retorno).end())
    .catch(err => res.sendStatus(err))
})

router.post('/cadastro/produtos',validarToken, async (req: Request, res: Response) => {
   await salvarProduto(req.body as Produtos)
   .then(retorno => res.json(retorno).end().status(200))
   .catch(err => res.send(err).status(400))
})
router.get('/produtos', validarToken,  async (req: Request, res: Response, next: NextFunction) => {
  await pegarProdutos()
  .then(retorno => res.json(retorno).end())
  .catch(err => res.sendStatus(err))
})


export default router;

