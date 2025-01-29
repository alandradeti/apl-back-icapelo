import { IAlternativa } from 'src/alternativas/entities/interfaces/alternativa.entity.interface';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';

export interface IPergunta {
  id?: string;
  enunciado: string;
  materia: string;
  alternativas?: IAlternativa[];
  provas?: IProva[];
}
