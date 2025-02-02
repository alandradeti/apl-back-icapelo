import { IAluno } from 'src/alunos/entities/interfaces/aluno.entity.interface';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';
import { IPergunta } from 'src/perguntas/entities/interfaces/pergunta.entity.interface';
import { IPeriodoAvaliativo } from 'src/periodosAvaliativos/entities/interfaces/periodoAvaliativo.entity.interface';
import { IProfessor } from 'src/professores/entities/interfaces/professor.entity.interface';
import { ProvaStatus } from 'src/provas/enums/provaStatus.enum';

export interface IProva {
  titulo: string;
  status: ProvaStatus;
  materia: IMateria;
  alunos: IAluno[];
  professores: IProfessor[];
  periodoAvaliativo: IPeriodoAvaliativo;
  perguntas: IPergunta[];
}
