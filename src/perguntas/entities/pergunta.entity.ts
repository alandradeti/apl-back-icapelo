import { Alternativa } from 'src/alternativas/entities/alternativa.entity';
import { Materia } from 'src/materias/entities/materia.entity';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { IPergunta } from './interfaces/pergunta.entity.interface';
import { Prova } from 'src/provas/entities/prova.entity';
import { DatabaseEntity } from 'src/database/entities/database.entity';

@Entity({
  name: 'pergunta',
})
export class Pergunta extends DatabaseEntity implements IPergunta {
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
