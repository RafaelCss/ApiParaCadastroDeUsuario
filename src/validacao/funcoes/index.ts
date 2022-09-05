import { TipoProduto } from "../../util/interface";
import { mensagem } from "../../util/mensagens";

const verificarCampos = {

  verificarEmail: (email: string) => {
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(email) && email.length > 0) {
      return
    }
    return  mensagem('email')
  },

  verificarString: (nome: string, campo?: string) => {
    if (nome.length > 0) {
      return
    }
    return mensagem(campo)
  },

  validarNumber: (senha: number) => {
    if (senha > 0 || senha < 5) return false
    return
  },

  validarTipo: (tipo: TipoProduto) => {
    if (tipo === TipoProduto.higiene || tipo === TipoProduto.limpeza || tipo === TipoProduto.perecivel) return true
    return false
  },

  verificarSenha: (senha: string) => {
    if (senha.length > 0 || senha.length > 5) {
      return
    }
    return mensagem('senha')
  }
}



export default verificarCampos;