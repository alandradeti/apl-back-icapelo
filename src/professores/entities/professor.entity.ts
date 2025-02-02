import { Materia } from 'src/materias/entities/materia.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { IProfessor } from './interfaces/professor.entity.interface';
import { Turma } from 'src/turmas/entities/turma.entity';
import { Prova } from 'src/provas/entities/prova.entity';
import { DatabaseEntity } from 'src/database/entities/database.entity';

@Entity('professor')
export class Professor extends DatabaseEntity implements IProfessor {
  @Column({
    name: 'matricula',
    type: 'varchar',
    nullable: false,
  })
  matricula: string;

  @OneToOne(() => Usuario, (usuario) => usuario.professor, {
    cascade: true,
    nullable: false,
  })
  @JoinColumn()
  usuario: Usuario;

  @ManyToMany(() => Materia, (materia) => materia.professores)
  @JoinTable()
  materias: Materia[];

  @ManyToMany(() => Turma, (turma) => turma.professores)
  turmas?: Turma[];

  @OneToMany(() => Prova, (prova) => prova.professor)
  provas?: Prova[];
}
