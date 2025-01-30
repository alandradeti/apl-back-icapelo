import { Materia } from 'src/materias/entities/materia.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
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
    nullable: false,
  })
  @JoinColumn()
  usuario: Usuario;

  @ManyToMany(() => Materia, (materia) => materia.professores, {
    nullable: false,
  })
  materias: Materia[];

  @ManyToMany(() => Turma, (turma) => turma.professores, {
    nullable: false,
  })
  turmas?: Turma[];

  @OneToMany(() => Prova, (prova) => prova.professores)
  provas?: Prova[];
}
