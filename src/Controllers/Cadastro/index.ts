import { userDb } from '../../data/db'
import { Cadastro } from '../../util/interface'

export async function salvarUsuario(dados: Cadastro) {
  const user = await userDb.where('email', '==', dados.email)
    .get()
    .then(res => { return res })
    .catch(err => { return err })

  const data = [...user].forEach(element => {
    console.log(element)
  });
  return user
}


