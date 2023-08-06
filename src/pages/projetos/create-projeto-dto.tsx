import mongoose from 'mongoose';
export type TObjectId = mongoose.ObjectId;
export const ObjectId = mongoose.Types.ObjectId;
export class CreateProjetoDto {
  titulo?: string;
  resumoProjeto?: string;
  descricaoProjeto?: string;
  justificativaProjeto?: string;
  metasObjetivos?: string;
  acessibilidade?: string;
  democratizacaoAcesso?: string;
  produtoCultural?: string;
  planoDivulgacao?: string;
  fontesPatrocinio?: string;
  userId?: string;
}
