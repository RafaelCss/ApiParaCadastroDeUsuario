import { userDb } from '../../data/db'
import { Cadastro } from '../../util/interface'
import { mensagem } from '../../util/mensagens'
import verificarDados from '../../validacao/funcoes';


export async function salvarUsuario(dados: Cadastro) {
  // verifica se o email e nome são validos
  let erros: Error[] = []
  const email = verificarDados.verificarEmail(dados.email)
  const nome = verificarDados.verificarNome(dados.nome)
  const senha = verificarDados.verificarSenha(dados.senha)
  if (email === false) {
    erros.push(mensagem('email'))
  }
  if (nome === false) {
    erros.push(mensagem('nome'))
  }
  if (senha === false) {
    erros.push(mensagem('senha', 'Digite uma senha válida com mais de 5 caracteres'))
  }


  // verifica se já existe este email:
  const user = await userDb.where('email', '==', dados.email).get()
  let resposta: boolean | undefined;
  if (!user.empty) {
    user.forEach(async (item) => {
      const { email } = item.data()
      if (email === dados.email)
        return resposta = true
    })
  }
  if (resposta === true) {
    erros.push(mensagem('email', 'Este email já está cadastrado'))
    return erros
  }
  if (email === true && nome === true) {
    userDb.add(dados)
    return "Cadastro realizado"
  }
  return erros;
}



