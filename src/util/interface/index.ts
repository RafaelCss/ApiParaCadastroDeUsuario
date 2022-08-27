import { ServiceAccount } from "firebase-admin";

export interface Ilogin{
    email:string;
    senha:string;
}

export interface Cadastro{
    nome:string;
    email:string;
    senha: string;
}

export interface IloginDataBase extends ServiceAccount{
    type: string;
    project_id: string;
    private_key_id: string;
    private_key: string;
    client_email: string;
    client_id: string;
    auth_uri: string;
    token_uri: string;
    auth_provider_x509_cert_url: string;
    client_x509_cert_url: string;
}


export interface IToken {
    token : string
 }



 export interface Produtos {
    nome: string
    valor: string
    tipo :TipoProduto
    fonernecedor : Fornecedor
  }

  export  interface Fornecedor {
    telefone : string
    email :  string
    vendedor : string
  }

  export  enum TipoProduto {
    perecivel = 1 ,
    limpeza = 2 ,
    higiene = 3
  }

