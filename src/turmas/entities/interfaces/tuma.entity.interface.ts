import { IAluno } from 'src/alunos/entities/interfaces/aluno.entity.interface';
import { IProfessor } from 'src/professores/entities/interfaces/professor.entity.interface';

export interface ITurma {
  nome: string;
  alunos: IAluno[];
  professores: IProfessor[];
}
