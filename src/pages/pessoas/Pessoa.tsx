export class Pessoa {
    constructor(
      public nome: string = '',
      public cpf: string = '',
      public telefone: string = '',
      public dataNascimento: Date = new Date(),
      public email: string = '',
      public logradouro: string = '',
      public numero: string = '',
      public bairro: string = '',
      public cep: string = '',
      public cidade: string = '',
      public estado: string = '',
      public areaAtuacao: string = '',
    ) {}
  }