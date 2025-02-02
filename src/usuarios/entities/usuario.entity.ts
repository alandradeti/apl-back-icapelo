import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { TipoUsuario } from 'src/usuarios/enums/usuario.enum';
import { IsEmail } from 'class-validator';
import { IUsuario } from './interfaces/usuario.entity.interface';
import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Professor } from 'src/professores/entities/professor.entity';
import { DatabaseEntity } from 'src/database/entities/database.entity';
import { IProfessor } from 'src/professores/entities/interfaces/professor.entity.interface';
import { IAluno } from 'src/alunos/entities/interfaces/aluno.entity.interface';

@Entity('usuario')
export class Usuario extends DatabaseEntity implements IUsuario {
  @Column({
    name: 'nome',
    type: 'varchar',
    nullable: false,
  })
  nome: string;

  @IsEmail({}, { message: 'O e-mail fornecido não é válido.' })
  @Column({
    name: 'email',
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    name: 'senha',
    type: 'varchar',
    nullable: false,
  })
  senha: string;

  @Column({
    name: 'tipo',
    type: 'enum',
    enum: TipoUsuario,
    nullable: false,
  })
  tipo: TipoUsuario;

  @OneToOne(() => Aluno, (aluno) => aluno.usuario, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  aluno?: Aluno;

  @OneToOne(() => Professor, (professor) => professor.usuario, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  professor?: Professor;
}
