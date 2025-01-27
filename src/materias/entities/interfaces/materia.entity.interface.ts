import { IPergunta } from "src/perguntas/entities/pergunta.entity.interface";

export interface IMateria {
  id?: string | undefined;
  nome: string;
  descricao: string;
  perguntas?: IPergunta[];
}