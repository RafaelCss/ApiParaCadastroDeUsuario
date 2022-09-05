import { db, produtoDb } from '../../data/db'
import { Produtos } from '../../util/interface';
import verificarCampos from '../../validacao/funcoes';




export async function salvarProduto(dados: Produtos) {
   const nome =  verificarCampos.verificarString(dados.nomeProduto as string, 'nome')
   const vendedor = verificarCampos.verificarString(dados.nomeFornecedor as string, 'vendedor')
   const telefone = verificarCampos.verificarString(dados.telefone as string, 'telefone')
   const email  = verificarCampos.verificarEmail(dados.email as string)
   const valor = verificarCampos.verificarString(dados.valor as string)
   const tipo = verificarCampos.validarTipo(dados.tipo as number)

   const dadosValidados ={
      nome,
      vendedor,
      telefone,
      email,
      valor,
      tipo
   }

   if(nome  || vendedor || telefone  || email   || valor  || tipo === false)
   {
      return dadosValidados
   }
   await produtoDb.add(dados)
   return { msg : " Cadastro realizado"}
}



export async function pegarProdutos() {
   const dados = await produtoDb.get()
   let resposta : any=[]
   if (!dados.empty) {
   dados.forEach(item => resposta.push(item.data()))
   }
   return resposta;
}