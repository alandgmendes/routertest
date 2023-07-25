export const _Pessoa = {
    _id: { Descricao: '_id' },
    nome: { Descricao: 'nome', label: 'Nome:' },
    cpfCnpj: { Descricao: 'cpfCnpj', label: 'CPF/CNPJ:' },
    telefone: { Descricao: 'telefone', label: 'Telefone:' },
    dataNascimento: { Descricao: 'dataNascimento', label: 'Data de Nascimento:' },
    email: { Descricao: 'email', label: 'E-mail:' },
    logradouro: { Descricao: 'logradouro', label: 'Logradouro:' },
    numero: { Descricao: 'numero', label: 'Número:' },
    bairro: { Descricao: 'bairro', label: 'Bairro:' },
    cep: { Descricao: 'cep', label: 'CEP:' },
    cidade: { Descricao: 'cidade', label: 'Cidade:' },
    estado: { Descricao: 'estado', label: 'Estado:' },
    areaAtuacao: { Descricao: 'areaAtuacao', label: 'Área de Atuação:' },
    GetCamposPessoa: () => {
      return [
        _Pessoa._id,
        _Pessoa.nome,
        _Pessoa.cpfCnpj,
        _Pessoa.telefone,
        _Pessoa.dataNascimento,
        _Pessoa.email,
        _Pessoa.logradouro,
        _Pessoa.numero,
        _Pessoa.bairro,
        _Pessoa.cep,
        _Pessoa.cidade,
        _Pessoa.estado,
        _Pessoa.areaAtuacao,
      ];
    },
  };
  
  export const _TipoPessoa = {
    Fisica: { Descricao: 'fisica', Codigo: 1, Nome: 'Pessoa física', label: 'Pessoa física:' },
    Juridica: { Descricao: 'juridica', Codigo: 2, Nome: 'Pessoa jurídica', Label: 'Pessoa jurídica:' },
    GetStatusPlano: () => {
      return [
        { value: _TipoPessoa.Fisica.Codigo, label: _TipoPessoa.Fisica.Descricao, Nome: _TipoPessoa.Fisica.Nome },
        { value: _TipoPessoa.Juridica.Codigo, label: _TipoPessoa.Juridica.Descricao, Nome: _TipoPessoa.Juridica.Nome },
      ];
    },
  };
  
  export default { _Pessoa, _TipoPessoa };