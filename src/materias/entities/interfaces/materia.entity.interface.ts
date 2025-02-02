import { IDatabaseEntity } from 'src/database/entities/interfaces/database.entity.interface';
import { Nota } from 'src/notas/entities/nota.entity';
import { IPergunta } from 'src/perguntas/entities/interfaces/pergunta.entity.interface';
import { IProfessor } from 'src/professores/entities/interfaces/professor.entity.interface';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';
import { ITurma } from 'src/turmas/entities/interfaces/tuma.entity.interface';

export interface IMateria {
  nome: string;
  perguntas?: IPergunta[];
  professores?: IProfessor[];
  provas?: IProva[];
  turmas?: ITurma[];
}
