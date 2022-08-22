import { userDb } from "../data/db";
import { Ilogin } from "../interface";

class ValidarDadosUser {
  static async validar(dados: Ilogin) {
    const erros: any = {};
    if (Object.values(dados).length === 0) {
      erros.dados = "Dados não fornecidos";
      return erros.dados;
    }
    if (!dados.email || dados.email.length < 3) {
      erros.email = "Email inválido";
    }
    userDb.add(dados);
    return
    ;
  }
}


export default ValidarDadosUser;

