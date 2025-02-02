import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { IMateria } from './interfaces/materia.entity.interface';
import { Pergunta } from 'src/perguntas/entities/pergunta.entity';
import { Professor } from 'src/professores/entities/professor.entity';
import { Prova } from 'src/provas/entities/prova.entity';
import { DatabaseEntity } from 'src/database/entities/database.entity';
import { Nota } from 'src/notas/entities/nota.entity';
import { Turma } from 'src/turmas/entities/turma.entity';

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

  @OneToMany(() => Pergunta, (pergunta) => pergunta.materia, {
    cascade: true,
  })
  perguntas?: Pergunta[];

  @ManyToMany(() => Professor, (professor) => professor.materias)
  professores?: Professor[];

  @OneToMany(() => Prova, (prova) => prova.materia)
  provas?: Prova[];

  @ManyToMany(() => Turma, (turma) => turma.materias)
  turmas?: Turma[];
}
