import { mensagem } from "../../util/mensagens";

const verificarCampos = {

  verificarEmail: (email: string) => {
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(email) && email.length > 0) {
      return true
    }
    return  mensagem('email')
  },

  verificarString: (nome: string, campo?: string) => {
    if (nome.length > 0) {
      return true
    }
    return mensagem(campo)
  },

  validarNumber: (senha: number) => {
    if (senha > 0 || senha < 5) return false
    return true
  },

  verificarSenha: (senha: string) => {
    if (senha.length > 0 || senha.length > 5) {
      return true
    }
    return mensagem('senha')
  }
}



export default verificarCampos;