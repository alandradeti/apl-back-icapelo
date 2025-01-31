import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Materia } from 'src/materias/entities/materia.entity';
import { Professor } from 'src/professores/entities/professor.entity';
import { Entity, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { IProva } from './interfaces/prova.entity.interface';
import { IPergunta } from 'src/perguntas/entities/interfaces/pergunta.entity.interface';
import { Pergunta } from 'src/perguntas/entities/pergunta.entity';
import { DatabaseEntity } from 'src/database/entities/database.entity';

@Entity('prova')
export class Prova extends DatabaseEntity implements IProva {
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

  @ManyToMany(() => Aluno, (aluno) => aluno.provas)
  @JoinTable()
  alunos: Aluno[];

  @ManyToMany(() => Professor, (professor) => professor.provas)
  @JoinTable()
  professores: Professor[];

  @ManyToMany(() => Pergunta, (pergunta) => pergunta.provas)
  @JoinTable()
  perguntas: IPergunta[];
}
