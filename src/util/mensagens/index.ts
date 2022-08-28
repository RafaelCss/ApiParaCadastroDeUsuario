

 export  function mensagem(campo ?: string[] | string , mensagem ?: string){

    const Erro : Error={
       name : campo as string ,
       message : mensagem ? mensagem : `Ei , preciso desse campo preenchido : ${campo}`
    }

      return Erro
  }