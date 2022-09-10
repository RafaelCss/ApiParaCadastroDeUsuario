import { Cadastro } from "../../util/interface";
import { CriarUsuario } from "./usuario";


export class SalvarUsuario {
 async  cadastrar({ email, nome, senha }: Cadastro) {
    const novoUsuario =  new CriarUsuario({ email, nome, senha });
    return novoUsuario.retorno();
  }
}
