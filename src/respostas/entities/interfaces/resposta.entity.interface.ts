import { IAlternativa } from 'src/alternativas/entities/interfaces/alternativa.entity.interface';
import { IAluno } from 'src/alunos/entities/interfaces/aluno.entity.interface';
import { IPergunta } from 'src/perguntas/entities/interfaces/pergunta.entity.interface';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';

export interface IResposta {
  aluno: IAluno;
  prova: IProva;
  pergunta: IPergunta;
  alternativa: IAlternativa;
}
