import { API_URL } from '../../../constants';
import mongoose from 'mongoose';
import { CreateProjetoDto } from '../../../pages/projetos/create-projeto-dto';
export type TObjectId = mongoose.ObjectId;
export const ObjectId = mongoose.Types.ObjectId;
export async function registerProjeto(projeto: CreateProjetoDto, token: string) {
    const urlBase = API_URL; 
    const url = `${urlBase}/projeto/register`;
    
    if(url){
        try {
            const response = await fetch(url, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(projeto),
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