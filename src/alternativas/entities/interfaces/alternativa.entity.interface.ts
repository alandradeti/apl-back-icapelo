import { IPergunta } from 'src/perguntas/entities/interfaces/pergunta.entity.interface';

export interface IAlternativa {
  descricao: string;
  correta: boolean;
  pergunta: IPergunta;
}
