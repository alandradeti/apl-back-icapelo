import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Professor } from 'src/professores/entities/professor.entity';
import { Column, ManyToMany, JoinTable, Entity } from 'typeorm';
import { ITurma } from './interfaces/tuma.entity.interface';
import { DatabaseEntity } from 'src/database/entities/database.entity';

@Entity('turma')
export class Turma extends DatabaseEntity implements ITurma {
  @Column({
    name: 'nome',
    type: 'varchar',
    nullable: false,
  })
  nome: string;

  @ManyToMany(() => Aluno, (aluno) => aluno.turmas, {
    nullable: false,
  })
  @JoinTable()
  alunos: Aluno[];

  @ManyToMany(() => Professor, (professor) => professor.turmas, {
    nullable: false,
  })
  @JoinTable()
  professores: Professor[];
}
