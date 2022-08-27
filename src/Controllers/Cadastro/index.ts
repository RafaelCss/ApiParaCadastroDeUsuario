
import { QuerySnapshot } from 'firebase-admin/firestore'
import { userDb, db } from '../../data/db'
import { Cadastro } from '../../util/interface'
import { mensagem } from '../../util/mensagens'


export async function salvarUsuario(dados: Cadastro) {
  const user = await userDb.where('email', '==', dados.email).get()
  let resposta: boolean | undefined;
  if (!user.empty) {
    user.forEach(async (item) => {
      const { email } = item.data()
      if (email === dados.email)
        resposta = true
    })
  }
  if (resposta === true) return mensagem('email', 'Este email já está cadastrado')
  userDb.add(dados)
  return "Cadastro realizado"
}


