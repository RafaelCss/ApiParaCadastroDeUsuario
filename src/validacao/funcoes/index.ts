import { Produtos } from "../../util/interface";
import { mensagem } from "../../util/mensagens";

const verificarDados = {
  verificarEmail: (email: string) => {
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(email) && email.length > 0) {
      return true
    }
    return false
  },

  verificarNome: (nome: string) => {
    if (nome.length <= 0) return false
    return true
  },

  verificarCampos:  (dados : Produtos) =>{
    for (const key in dados) {
      if (Object.prototype.hasOwnProperty.call(dados, key)) {
        console.log(key)
      }
    }
  },

  verificarSenha: (senha: string) => {
    if (senha.length <= 0 || senha.length < 5) return false
    return true
  }
}


export default verificarDados;