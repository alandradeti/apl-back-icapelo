import { Nota } from 'src/notas/entities/nota.entity';
import { IPergunta } from 'src/perguntas/entities/interfaces/pergunta.entity.interface';
import { IProfessor } from 'src/professores/entities/interfaces/professor.entity.interface';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';

export interface IMateria {
  nome: string;
  notas?: Nota[];
  perguntas?: IPergunta[];
  professores?: IProfessor[];
  provas?: IProva[];
}
