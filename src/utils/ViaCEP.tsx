interface CepData {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
  }
  
  export const getCep = async (cep: string): Promise<CepData | null> => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error('Failed to fetch data from ViaCEP API');
      }
  
      const data = await response.json();
      if (data.erro) {
        return null; 
      }
  
      return {
        cep: data.cep,
        logradouro: data.logradouro,
        complemento: data.complemento,
        bairro: data.bairro,
        localidade: data.localidade,
        uf: data.uf,
        ibge: data.ibge,
        gia: data.gia,
        ddd: data.ddd,
        siafi: data.siafi,
      };
    } catch (error) {
      console.error('Error while fetching CEP data:', error);
      return null;
    }
  };