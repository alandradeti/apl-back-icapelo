import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Materia } from 'src/materias/entities/materia.entity';
import { Professor } from 'src/professores/entities/professor.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { IProva } from './interfaces/prova.entity.interface';
import { IPergunta } from 'src/perguntas/entities/interfaces/pergunta.entity.interface';
import { Pergunta } from 'src/perguntas/entities/pergunta.entity';

@Entity('prova')
export class Prova implements IProva {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id?: string;

  @Column({
    name: 'titulo',
    type: 'varchar',
    nullable: false,
  })
  titulo: string;

  @ManyToOne(() => Materia, (materia) => materia.provas, {
    nullable: false,
  })
  materia: Materia;

  @ManyToMany(() => Aluno, (aluno) => aluno.provas, {
    nullable: false,
  })
  alunos: Aluno[];

  @ManyToMany(() => Professor, (professor) => professor.provas, {
    nullable: false,
  })
  professores: Professor[];

  @ManyToMany(() => Pergunta, (pergunta) => pergunta.provas, {
    nullable: false,
  })
  @JoinTable()
  perguntas: IPergunta[];
}
