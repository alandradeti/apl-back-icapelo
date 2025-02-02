import { Turma } from 'src/turmas/entities/turma.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Entity,
  Column,
  ManyToMany,
  OneToOne,
  JoinColumn,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { IAluno } from './interfaces/aluno.entity.interface';
import { Prova } from 'src/provas/entities/prova.entity';
import { DatabaseEntity } from 'src/database/entities/database.entity';
import { Resposta } from 'src/respostas/entities/resposta.entity';

@Entity('aluno')
export class Aluno extends DatabaseEntity implements IAluno {
  @Column({
    name: 'matricula',
    type: 'varchar',
    nullable: false,
  })
  matricula: string;

  @OneToOne(() => Usuario, (usuario) => usuario.aluno, {
    cascade: true,
    nullable: false,
  })
  @JoinColumn()
  usuario: Usuario;

  @ManyToMany(() => Turma, (turma) => turma.alunos)
  turmas?: Turma[];

  @ManyToMany(() => Prova, (prova) => prova.alunos)
  @JoinTable()
  provas?: Prova[];

  @OneToMany(() => Resposta, (resposta) => resposta.aluno)
  respostas?: Resposta[];
}
