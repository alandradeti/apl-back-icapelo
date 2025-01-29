import { IAluno } from 'src/alunos/entities/interfaces/aluno.entity.interface';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';
import { IPergunta } from 'src/perguntas/entities/interfaces/pergunta.entity.interface';
import { IProfessor } from 'src/professores/entities/interfaces/professor.entity.interface';

export interface IProva {
  id?: string;
  titulo: string;
  materia: IMateria;
  alunos: IAluno[];
  professores: IProfessor[];
  perguntas: IPergunta[];
}
