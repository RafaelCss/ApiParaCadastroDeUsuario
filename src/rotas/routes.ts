import { Router } from 'express';
import { Request, Response, NextFunction } from 'express';
import { salvarUsuario } from '../Controllers/Cadastro';

import { validarDados, validarToken } from '../util/validacao';

const router = Router();

router.post('/login', validarDados, async (req: Request, res: Response, next: NextFunction) => {
  console.log('olá')

})

router.post('/cadastro/usuario', async (req: Request, res: Response, next: NextFunction) => {
  await salvarUsuario(req.body)
    .then(retorno =>console.log(retorno))
    .catch(err => res.sendStatus(err)
    )
})


router.get('/', validarToken, async (req: Request, res: Response, next: NextFunction) => {
  console.log('olá')
})
router.get('/produtos', (req: Request, res: Response) => {
})




export default router;