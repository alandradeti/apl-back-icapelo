import { IAluno } from 'src/alunos/entities/interfaces/aluno.entity.interface';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';
import { IProfessor } from 'src/professores/entities/interfaces/professor.entity.interface';
import { PeriodoTurma } from 'src/turmas/enums/turma.enum';

export interface ITurma {
  nome: string;
  ano: string;
  periodo: PeriodoTurma;
  materias: IMateria[];
  alunos: IAluno[];
  professores: IProfessor[];
}
