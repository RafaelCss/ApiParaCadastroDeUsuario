import { userDb } from "../../data/db"

class Validar {

  constructor(){

  }

 async Valida(){
  await userDb
  .where('email', '==', dados.email).get()
  }

}





export default Validar