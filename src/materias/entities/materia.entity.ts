import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { IMateria } from './interfaces/materia.entity.interface';
import { Pergunta } from 'src/perguntas/entities/pergunta.entity';
import { Professor } from 'src/professores/entities/professor.entity';
import { Prova } from 'src/provas/entities/prova.entity';
import { DatabaseEntity } from 'src/database/entities/database.entity';

@Entity({
  name: 'materia',
})
export class Materia extends DatabaseEntity implements IMateria {
  @Column({
    name: 'nome',
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  nome: string;

  @Column({
    name: 'descricao',
    type: 'varchar',
    nullable: false,
  })
  descricao: string;

  @OneToMany(() => Pergunta, (pergunta) => pergunta.materia, {
    cascade: true,
  })
  perguntas?: Pergunta[];

  @ManyToMany(() => Professor, (professor) => professor.materias)
  professores?: Professor[];

  @OneToMany(() => Prova, (prova) => prova.materia)
  provas?: Prova[];
}
