  function mensagem(campo : string , mensagem : string){
      const Erro : Error={
         name : campo ,
         message : mensagem ? mensagem : `Ei , preciso campo preenchido : ${campo}`
      }
      return Erro
  }