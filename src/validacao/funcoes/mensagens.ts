import { TipoProduto } from "../../util/interface";
import { mensagem } from "../../util/mensagens";

interface IVerificaCampos{
  email ?: string
  senha ?: string
  numero ?: number
  tipo ?: TipoProduto
}
class VerificarCampos {
 verificarEmail(email: string) {
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(email) && email.length > 0) {
      return email
    }
    return this.erros('email')
  }

  verificarString(nome: string, campo?: string) {
    if (nome.length > 0) {
      return nome
    }
    return this.erros(nome)
  }

  validarNumber(senha: number) {
    if (senha > 0 || senha < 5) return false
    return senha
  }

  validarTipo(tipo: TipoProduto) {
    if (tipo === TipoProduto.higiene || tipo === TipoProduto.limpeza || tipo === TipoProduto.perecivel) return tipo
    return this.erros('tipo')
  }

  verificarSenha(senha: string) {
    if (senha.length > 0 || senha.length > 5) {
      return senha
    }
    return this.erros('senha')
  }

  private erros (campo : string, msg ?: string ){
   return mensagem(campo, msg)
  }

}



export default VerificarCampos;