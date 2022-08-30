import { db, produtoDb } from '../../data/db'
import { Produtos } from '../../util/interface';
import verificarCampos from '../../validacao/funcoes';




export async function salvarProduto(dados: Produtos) {
   // await produtoDb.add(dados)
   const nome =  verificarCampos.verificarString(dados.nome as string, 'nome')
   const vendedor = verificarCampos.verificarString(dados.vendedor as string, 'vendedor')
   const telefone = verificarCampos.verificarString(dados.telefone as string, 'telefone')
   const email  = verificarCampos.verificarEmail(dados.email as string)
   const valor = verificarCampos.validarNumber(dados.valor as number)
   const tipo = verificarCampos.validarNumber(dados.tipo as number)

   const dadosValidados ={
      nome,
      vendedor,
      telefone,
      email,
      valor,
      tipo
   }


   return dadosValidados
}



export async function pegarProdutos() {
   const dados = await produtoDb.get()
   let resposta : any=[]
   if (!dados.empty) {
   dados.forEach(item => resposta.push(item.data()))
   }
   return resposta;
}