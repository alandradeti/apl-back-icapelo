import { Entity, Column, ManyToOne, Index } from 'typeorm';
import { DatabaseEntity } from 'src/database/entities/database.entity';
import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Prova } from 'src/provas/entities/prova.entity';
import { INota } from './interfaces/nota.entity.interface';
import { PeriodoAvaliativo } from 'src/periodosAvaliativos/entities/periodoAvaliativo.entity';
import { Materia } from 'src/materias/entities/materia.entity';

@Entity('nota')
export class Nota extends DatabaseEntity implements INota {
  @Column('decimal', { nullable: false, precision: 5, scale: 2 })
  nota: number;

  @ManyToOne(() => Aluno, { nullable: false, onDelete: 'CASCADE' })
  @Index()
  aluno: Aluno;

  @ManyToOne(() => Prova, { nullable: false, onDelete: 'CASCADE' })
  @Index()
  prova: Prova;
}
