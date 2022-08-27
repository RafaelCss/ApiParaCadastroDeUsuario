import { Router } from 'express';
<<<<<<< HEAD
import { Request, Response, NextFunction } from 'express';
import { salvarUsuario } from '../Controllers/Cadastro';
=======
import { Request, Response , NextFunction } from 'express';

import  { validarDados, validarToken } from '../util/validacao';
>>>>>>> 0f390b883e700821059064a1edfb1c0560ecfddc

import { validarDados, validarToken } from '../util/validacao';

<<<<<<< HEAD
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
=======
router.post('/login', validarDados , async (req: Request, res: Response, next: NextFunction) => {
  console.log('olá')
})

router.get('/',validarToken , async (req: Request, res: Response, next: NextFunction) => {
  console.log('olá')
})
router.get('/produtos', (req: Request, res: Response ) => {
 })
>>>>>>> 0f390b883e700821059064a1edfb1c0560ecfddc




export default router;