import { db,produtoDb } from '../../data/db'
import { Produtos } from '../../util/interface';


export async function salvarProduto(dados: Produtos) {
   await produtoDb.add(dados)

    return 'dados salvos'
}


export async function pegarProdutos() {
  const dados =  await produtoDb.get()
   return dados
}