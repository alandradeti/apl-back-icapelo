import { IAlternativa } from 'src/alternativas/entities/interfaces/alternativa.entity.interface';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';
import { Dificuldade } from 'src/perguntas/enums/pergunta.enum';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';

export interface IPergunta {
  enunciado: string;
  materia: IMateria;
  dificuldade: Dificuldade;
  alternativas?: IAlternativa[];
  provas?: IProva[];
}
