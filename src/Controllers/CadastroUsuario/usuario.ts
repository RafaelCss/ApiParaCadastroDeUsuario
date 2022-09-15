import { DocumentData } from 'firebase-admin/firestore';
import { userDb } from '../../data/db'
import { Cadastro } from '../../util/interface'
import { mensagem } from '../../util/mensagens'
import VerificarCampos from '../../validacao/funcoes/mensagens';
import { criarToken } from '../../validacao/seguranca/segToken';

export class CriarUsuario {
  private props: Cadastro;

  get nome(): string {
    return this.props.nome
  }

  get email(): string {
    return this.props.email
  }

  get senha(): string {
    return this.props.senha
  }

  private set setSenha(senha: string) {
    this.props.senha = senha
  }

  private set setEmail(email: string) {
    this.props.email = email
  }

  private set setNome(nome: string) {
    this.props.nome = nome
  }


  constructor(props: Cadastro) {
    this.props = props
  }

  protected async validar() {
    const campos = new VerificarCampos()
    const email = campos.verificarEmail(this.props.email)
    const senha = campos.verificarSenha(this.props.senha)
    const nome = campos.verificarString(this.props.nome)
    if (typeof email === 'string' && typeof senha === 'string' && typeof nome === 'string') {
      this.setEmail = email;
      this.setNome = nome;
      this.setSenha = senha
      const cadastrar = this.cadastrarBanco({ email: this.email, nome: this.nome, senha: this.senha })
      return cadastrar
    }

    return { erros :{ email, senha, nome} }
  }
  protected async cadastrarBanco({ email, nome, senha }: Cadastro) {
    let resultado
    const jaExiste = (await userDb.where('email', '==', email).get()).forEach(item => {
      const { email }: DocumentData = item.data()
      resultado = email
      return
    })
    if (resultado === email) {
      return {
        erros: mensagem('email', `Este email : ${this.email} já existe`)
      }
    }
    const cadastroBanco = await userDb.add({
      email,
      senha,
      nome
    }).then(res => res.id)

    return {
      mensagem: 'Usuário Criado',
      id: cadastroBanco,
      token: criarToken(cadastroBanco)
    }
  }


  public async retorno() {
    return this.validar()
  }
}




