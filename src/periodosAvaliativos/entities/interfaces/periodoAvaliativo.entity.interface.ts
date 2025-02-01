import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';

export interface IPeriodoAvaliativo {
  descricao: string;
  provas?: IProva[];
}
