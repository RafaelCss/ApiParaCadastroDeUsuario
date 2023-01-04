import { Router } from 'express';
import { Request, Response, NextFunction } from 'express';
import { validarDados, validarToken } from '../Validacoes/seguranca';
import { Cadastro, Produtos } from '../util/interface';
import { pegarProdutos } from '../Controllers/CadastroProdutos/produto';
import { SalvarUsuario } from '../Controllers/CadastroUsuario/salvarusuario';
import { SalvarProduto } from '../Controllers/CadastroProdutos/salvarProduto';

const router = Router();

router.get('/', async (req : Request , res : Response)=>{
   res.send("Olá seja bem-vindo")
})

router.post('/login', validarDados)

router.post('/cadastro/usuario',async (req: Request, res: Response, next: NextFunction) => {
   const salvar = new SalvarUsuario()
   await salvar.cadastrar(req.body as Cadastro)
    .then(retorno => res.json(retorno).end())
    .catch(err => res.sendStatus(err))
})

router.get('/produtos',validarToken , async (req: Request, res: Response, next: NextFunction) => {
  await pegarProdutos()
  .then(retorno => res.json(retorno).end().status(200))
  .catch(err => res.sendStatus(err))
})

router.post('/cadastro/produtos', validarToken,   async (req: Request, res: Response, next: NextFunction) => {
   const salvar = new SalvarProduto()
   await salvar.cadastrar(req.body as Produtos)
   .then(retorno => res.json(retorno).end().status(200))
   .catch(err => res.send(err).status(400))
})


export default router;

