import { Produtos } from "../../util/interface";
import { CriarProduto } from "./produto";

export class SalvarProduto {
  async  cadastrar({descricao, email, nomeFornecedor, nomeProduto, telefone, tipo, valor }: Produtos) {
     const novoUsuario =  new CriarProduto({descricao, email, nomeFornecedor, nomeProduto, telefone, tipo, valor});
     return novoUsuario.retorno();
   }
 }
