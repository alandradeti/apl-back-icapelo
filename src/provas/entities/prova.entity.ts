import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Materia } from 'src/materias/entities/materia.entity';
import { Professor } from 'src/professores/entities/professor.entity';
import { Entity, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { IProva } from './interfaces/prova.entity.interface';
import { Pergunta } from 'src/perguntas/entities/pergunta.entity';
import { DatabaseEntity } from 'src/database/entities/database.entity';
import { PeriodoAvaliativo } from 'src/periodosAvaliativos/entities/periodoAvaliativo.entity';
import { ProvaStatus } from '../enums/provaStatus.enum';

@Entity('prova')
export class Prova extends DatabaseEntity implements IProva {
  @Column({
    name: 'titulo',
    type: 'varchar',
    nullable: false,
  })
  titulo: string;

  @Column({
    type: 'enum',
    enum: ProvaStatus,
    default: ProvaStatus.ABERTA,
    nullable: false,
  })
  status: ProvaStatus;

  @ManyToOne(() => Materia, (materia) => materia.provas, {
    nullable: false,
  })
  materia: Materia;

  @ManyToMany(() => Aluno, (aluno) => aluno.provas)
  @JoinTable()
  alunos: Aluno[];

  @ManyToOne(() => Professor, (professor) => professor.provas, {
    onDelete: 'RESTRICT',
  })
  professor: Professor;

  @ManyToOne(
    () => PeriodoAvaliativo,
    (periodoAvaliativo) => periodoAvaliativo.provas,
    { nullable: false },
  )
  periodoAvaliativo: PeriodoAvaliativo;

  @ManyToMany(() => Pergunta, (pergunta) => pergunta.provas)
  perguntas: Pergunta[];
}
