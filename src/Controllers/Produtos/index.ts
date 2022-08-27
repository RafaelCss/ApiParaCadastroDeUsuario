import { produtoDb } from '../../data/db'
import { Produtos } from '../../util/interface';


async function salvarProduto(dados: Produtos) {
  produtoDb.add(dados)
}