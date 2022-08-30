import { userDb } from '../../data/db'
import { Cadastro } from '../../util/interface'
import { mensagem } from '../../util/mensagens'
import verificarCampos from '../../validacao/funcoes';
import { criarToken } from '../../validacao/seguranca/segToken';


export async function salvarUsuario(dados: Cadastro) {
  // verifica se o email e nome são validos
  const email = verificarCampos.verificarEmail(dados.email)
  const nome = verificarCampos.verificarString(dados.nome)
  const senha = verificarCampos.verificarSenha(dados.senha)

  if (email || nome || senha ) {
    return {
      erros: {
        email: email,
        nome: nome,
        senha: senha,
      }
    }
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

    return {
      erros:
        mensagem('email', 'Este email já está cadastrado')
    }
  }
  if (email === true && nome === true) {
    userDb.add(dados)
    return {
      mensagem: "cadastro realizado",
      token: criarToken(dados.email)
    }
  }
}



