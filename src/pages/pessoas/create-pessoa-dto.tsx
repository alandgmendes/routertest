export interface CreatePessoaDto {
    cpf: string;
    criadoEm: Date;
    dataNascimento: string;
    email: string;
    endereco: {
      bairro: string;
      cep: string;
      cidade: string;
      estado: string;
      logradouro: string;
      numero: string;
    };
    nome: string;
    telefone: string;
  }