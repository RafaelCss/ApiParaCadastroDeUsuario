import { response, Router } from 'express';
import { salvarUsuario } from '../Controllers/Cadastro';
import { Request, Response , NextFunction } from 'express';
import  { validarDados, validarToken } from '../util/validacao';
import { Cadastro } from '../util/interface';




const router = Router();

router.post('/login', validarDados, async (req: Request, res: Response, next: NextFunction) => {
})

router.post('/cadastro/usuario', async (req: Request, res: Response, next: NextFunction) => {
  const resposta = await salvarUsuario(req.body as Cadastro)
    .then(retorno => res.json(retorno).end())
    .catch(err => res.sendStatus(err))
})


router.get('/', validarToken, async (req: Request, res: Response, next: NextFunction) => {
  console.log('olá')
})
router.get('/produtos', (req: Request, res: Response) => {
})

router.post('/login', validarDados , async (req: Request, res: Response, next: NextFunction) => {
  console.log('olá')
})





export default router;