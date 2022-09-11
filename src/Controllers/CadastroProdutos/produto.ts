import { db, produtoDb } from '../../data/db'
import { Produtos, TipoProduto } from '../../util/interface';
import VerificarCampos from '../../validacao/funcoes/mensagens';




export class CriarProduto  {
   private props: Produtos;

   get nomeFornecedor(): string {
     return this.props.nomeFornecedor
   }

   get email(): string {
     return this.props.email
   }

   get descricao(): string {
     return this.props.descricao
   }


   get telefone(): string {
      return this.props.telefone
    }

    get valor(): string {
      return this.props.valor
    }

    get tipo(): TipoProduto {
      return this.props.tipo
    }

    get nomeProduto(): string {
      return this.props.nomeProduto
    }

    constructor(props: Produtos) {
      this.props = props
    }

   protected async validar() {
     const campos = new VerificarCampos()
     const email = campos.verificarEmail(this.props.email)
     const nomeFornecedor = campos.verificarString(this.props.nomeFornecedor)
     const nomeProduto = campos.verificarString(this.props.nomeProduto)

     if (typeof email === 'string' && typeof nomeFornecedor === 'string' && typeof nomeProduto === 'string') {
       const cadastrar = this.cadastrarBanco({ email: this.email, descricao: this.descricao , nomeFornecedor : this.nomeFornecedor, nomeProduto: this.nomeProduto, telefone: this.telefone, tipo : this.tipo, valor : this.valor})
       return cadastrar
     }

     return { email }
   }
   protected async cadastrarBanco({ email, descricao, nomeProduto, nomeFornecedor, telefone, tipo, valor }: Produtos) {
     const cadastroBanco = await produtoDb.add({
       email,
       descricao,
       nomeProduto,
       nomeFornecedor,
       telefone,
       tipo,
       valor
     }).then(res => res.id)

     return {
       mensagem: 'Produto Criado',
       id: cadastroBanco,
     }
   }

   public async retorno() {
     return this.validar()
   }
 }


export async function pegarProdutos() {
   const dados = await produtoDb.get()
   let resposta : any=[]
   if (!dados.empty) {
   dados.forEach(item => resposta.push(item.data()))
   }
   return resposta;
}