export const _Projeto = {
    _id: { Descricao: '_id' },
    titulo: { Descricao: 'titulo', label: 'Título:' },
    resumoProjeto: { Descricao: 'resumoProjeto', label: 'Resumo do Projeto:' },
    descricaoProjeto: { Descricao: 'descricaoProjeto', label: 'Descrição do Projeto:' },
    justificativaProjeto: { Descricao: 'justificativaProjeto', label: 'Justificativa do Projeto:' },
    metasObjetivos: { Descricao: 'metasObjetivos', label: 'Metas e Objetivos:' },
    acessibilidade: { Descricao: 'acessibilidade', label: 'Acessibilidade:' },
    democratizacaoAcesso: { Descricao: 'democratizacaoAcesso', label: 'Democratização do Acesso:' },
    produtoCultural: { Descricao: 'produtoCultural', label: 'Produto Cultural:' },
    planoDivulgacao: { Descricao: 'planoDivulgacao', label: 'Plano de Divulgação:' },
    fontesPatrocinio: { Descricao: 'fontesPatrocinio', label: 'Fontes de Patrocínio:' },
    GetCamposProjeto: () => {
      return [
        _Projeto._id,
        _Projeto.titulo,
        _Projeto.resumoProjeto,
        _Projeto.descricaoProjeto,
        _Projeto.justificativaProjeto,
        _Projeto.metasObjetivos,
        _Projeto.acessibilidade,
        _Projeto.democratizacaoAcesso,
        _Projeto.produtoCultural,
        _Projeto.planoDivulgacao,
        _Projeto.fontesPatrocinio,
      ];
    },
  };
  
  export default { _Projeto };
  