import { Alternativa } from 'src/alternativas/entities/alternativa.entity';
import { Materia } from 'src/materias/entities/materia.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IPergunta } from './interfaces/pergunta.entity.interface';
import { Prova } from 'src/provas/entities/prova.entity';

@Entity({
  name: 'pergunta',
})
export class Pergunta implements IPergunta {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  id?: string;

  @Column({
    name: 'nome',
    type: 'varchar',
    nullable: false,
  })
  enunciado: string;

  @ManyToOne(() => Materia, (materia) => materia.perguntas, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  materia: Materia;

  @OneToMany(() => Alternativa, (alternativa) => alternativa.pergunta, {
    cascade: true,
  })
  alternativas?: Alternativa[];

  @ManyToMany(() => Prova, (prova) => prova.perguntas)
  provas?: Prova[];
}
