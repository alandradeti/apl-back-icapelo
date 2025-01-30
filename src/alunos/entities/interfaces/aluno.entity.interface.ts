import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';
import { ITurma } from 'src/turmas/entities/interfaces/tuma.entity.interface';
import { IUsuario } from 'src/usuarios/entities/interfaces/usuario.entity.interface';

export interface IAluno {
  matricula: string;
  usuario: IUsuario;
  turmas?: ITurma[];
  provas?: IProva[];
}
