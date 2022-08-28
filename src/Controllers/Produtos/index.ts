import { db,produtoDb } from '../../data/db'
import { Produtos } from '../../util/interface';
import verificarDados from '../../validacao/funcoes';


export async function salvarProduto(dados: Produtos) {
   await produtoDb.add(dados)
   const verifica =  verificarDados.verificarCampos(dados)
    return verifica
}


export async function pegarProdutos() {
  const dados =  await produtoDb.get()
   return dados
}