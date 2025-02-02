import { Alternativa } from 'src/alternativas/entities/alternativa.entity';
import { Materia } from 'src/materias/entities/materia.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { IPergunta } from './interfaces/pergunta.entity.interface';
import { Prova } from 'src/provas/entities/prova.entity';
import { DatabaseEntity } from 'src/database/entities/database.entity';
import { Dificuldade } from '../enums/pergunta.enum';
import { materialize } from 'rxjs';

@Entity({
  name: 'pergunta',
})
export class Pergunta extends DatabaseEntity implements IPergunta {
  @Column({
    name: 'enunciado',
    type: 'varchar',
    nullable: false,
  })
  enunciado: string;

  @Column({
    name: 'dificuldade',
    type: 'enum',
    enum: Dificuldade,
    nullable: false,
  })
  dificuldade: Dificuldade;

  @ManyToOne(() => Materia, (materia) => materia.perguntas, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  materia: Materia;

  @OneToMany(() => Alternativa, (alternativa) => alternativa.pergunta, {
    cascade: true,
  })
  @JoinColumn()
  alternativas?: Alternativa[];

  @ManyToMany(() => Prova, (prova) => prova.perguntas)
  @JoinTable()
  provas?: Prova[];
}
