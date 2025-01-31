import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Professor } from 'src/professores/entities/professor.entity';
import { Column, ManyToMany, JoinTable, Entity } from 'typeorm';
import { ITurma } from './interfaces/tuma.entity.interface';
import { DatabaseEntity } from 'src/database/entities/database.entity';
import { PeriodoTurma } from '../enums/turma.enum';

@Entity('turma')
export class Turma extends DatabaseEntity implements ITurma {
  @Column({
    name: 'nome',
    type: 'varchar',
    nullable: false,
  })
  nome: string;

  @Column({
    name: 'ano',
    type: 'varchar',
    nullable: false,
  })
  ano: string;

  @Column({
    name: 'periodo',
    enum: PeriodoTurma,
    nullable: false,
  })
  periodo: PeriodoTurma;

  @ManyToMany(() => Aluno, (aluno) => aluno.turmas)
  @JoinTable()
  alunos: Aluno[];

  @ManyToMany(() => Professor, (professor) => professor.turmas)
  @JoinTable()
  professores: Professor[];
}
