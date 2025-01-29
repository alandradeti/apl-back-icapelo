import { IAlternativa } from 'src/alternativas/entities/interfaces/alternativa.entity.interface';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';

export interface IPergunta {
  id?: string;
  enunciado: string;
  materia: IMateria;
  alternativas?: IAlternativa[];
  provas?: IProva[];
}
