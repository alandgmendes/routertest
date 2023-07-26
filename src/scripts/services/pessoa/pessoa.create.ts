import { API_URL } from '../../../constants';
import { CreatePessoaDto } from '../../../pages/pessoas/create-pessoa-dto';
export async function registerPessoa(pessoa: CreatePessoaDto) {
    const urlBase = API_URL; 
    const url = `${urlBase}/pessoas/register`;
    
    if(url){
        try {
            const response = await fetch(url, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pessoa),
            });
        
            if (response) {
              const result = response.json();
              return result;
            } else {              
              return 'error';
            }
        } catch (error) {
            console.error('Error:', error);
            return { error: 'An error occurred during login' };
        }
    }
  }