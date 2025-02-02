import { IAluno } from 'src/alunos/entities/interfaces/aluno.entity.interface';
import { IDatabaseEntity } from 'src/database/entities/interfaces/database.entity.interface';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';
import { IPeriodoAvaliativo } from 'src/periodosAvaliativos/entities/interfaces/periodoAvaliativo.entity.interface';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';

export interface INota {
  nota: number;
  aluno: IAluno;
  prova: IProva;
  periodoAvaliativo: IPeriodoAvaliativo;
  materia: IMateria;
}
