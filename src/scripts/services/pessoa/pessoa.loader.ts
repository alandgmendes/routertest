import { API_URL } from '../../../constants'
export async function getPessoaByUserId(id: string) {
    const urlBase = API_URL; 
    const url = `${urlBase}/usuarios/${id}`;
    
    if(url){
        try {
            const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
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