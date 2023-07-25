export const _Pessoa = {
    id: {  Descricao: 'id', label: 'Id' }, 
    email: { Descricao: 'email', label: 'e-mail:'},
    limiteAnoFabricacao: {  Descricao: 'limiteAnoFabricacao' }, 
    limiteKm: { Descricao: 'limiteKm'}, 
    url: { Descricao: 'url'},
    valor: { Descricao: 'valor'}, 
    status: { Descricao: 'status'},
    nomeStatus: { Descricao: 'nomeStatus'},
    GetCamposPessoa: () => {
        return [
            _Pessoa.id,
            _Pessoa.email,            
            _Pessoa.limiteAnoFabricacao, 
            _Pessoa.limiteKm,
            _Pessoa.url,
            _Pessoa.valor,
            _Pessoa.status,
            _Pessoa.nomeStatus
        ];       
    }
   
};


export const _StatusPlano = {
    Ativo: { Descricao: 'Ativo', Codigo: 1, Nome: 'ativo' },
    Inativo: { Descricao: 'Inativo', Codigo: 2, Nome: 'inativo' },
    GetStatusPlano: () => {
        return [{ value: _StatusPlano.Ativo.Codigo, label: _StatusPlano.Ativo.Descricao, status: _StatusPlano.Ativo.Nome },
        { value: _StatusPlano.Inativo.Codigo, label: _StatusPlano.Inativo.Descricao, status: _StatusPlano.Inativo.Nome }        
        ];
    }
};


export default {_Pessoa,_StatusPlano}; 