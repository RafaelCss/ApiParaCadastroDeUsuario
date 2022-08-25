import { Router } from 'express';
import { Request, Response } from 'express';

import validarDados, { validarToken } from '../util/validacao';

 const router = Router();

router.post('/login', validarDados , async ( req : Request , res : Response) => {
})


router.get('/',validarToken , async (req: Request, res: Response) => {
})

export default router;