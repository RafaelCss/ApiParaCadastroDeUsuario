import { db, produtoDb } from '../../data/db'
import { Produtos, TipoProduto } from '../../util/interface';
import VerificarCampos from '../../validacao/funcoes/mensagens';




export async function salvarProduto(dados: Produtos) {
   console.log(dados)
 //  const nome =  new VerificarCampos<Produtos>(dados)
   /* const vendedor = verificarCampos.verificarString(dados.nomeFornecedor as string, 'vendedor')
   const telefone = verificarCampos.verificarString(dados.telefone as string, 'telefone')
   const email  = verificarCampos.verificarEmail(dados.email as string)
   const valor = verificarCampos.verificarString(dados.valor as string)
   const tipo = verificarCampos.validarTipo(dados.tipo as number) */

   const dadosValidados  =[{}]

/*    if(typeof nome === 'string' || typeof vendedor === 'string'  || typeof telefone === 'string'  || typeof email === 'string'   || typeof valor === 'string' || typeof tipo === 'number')
   {
      return dadosValidados.push(nome,vendedor, telefone, email,valor , tipo )
   } */
  // await produtoDb.add(dadosValidados)
  // return  nome
}



export async function pegarProdutos() {
   const dados = await produtoDb.get()
   let resposta : any=[]
   if (!dados.empty) {
   dados.forEach(item => resposta.push(item.data()))
   }
   return resposta;
}