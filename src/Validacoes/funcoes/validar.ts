import { userDb } from "../../data/db"

 class  Validar {
   async Valida(email : string , senha :string)  {
    const resposta = await userDb
    .where('email', '==', email)
    .where('senha', '==', senha).get()
    return resposta.empty
  }

}





export default Validar