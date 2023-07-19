
import { API_URL } from '../../../constants'
export async function loginCall(email: string, password: string) {
    const urlBase = API_URL; 
    const url = `${urlBase}/auth/login`;
    console.log(url);
    const data = {
      username: "john",
      password:  "changeme"
    };
    if(url){

        try {
            const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            });
        
            if (response) {
              console.log('deu certo');
              const result = response.json();
              console.log(result);
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
  
  // Usage example:
  const email = 'example@example.com';
  const password = 'password123';
  
  loginCall(email, password)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });