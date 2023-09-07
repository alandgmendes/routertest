import { API_URL } from '../../../constants';
import mongoose from 'mongoose';
export type TObjectId = mongoose.ObjectId;
export const ObjectId = mongoose.Types.ObjectId;
export async function getCronograma(cronogramaId: string,  token: string) {
    const urlBase = API_URL; 
    const url = `${urlBase}/cronogramas/${cronogramaId}`;
    if(url){
        try {
            const response = await fetch(url, {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
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
            return { error: 'Um erro ocorreu ao recuperar dados do cronograma' };
        }
    }
  }