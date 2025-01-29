import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Materia } from 'src/materias/entities/materia.entity';
import { DatabaseRepository } from './repositories/database.repository';
import { Pergunta } from 'src/perguntas/entities/pergunta.entity';
import { Alternativa } from 'src/alternativas/entities/alternativa.entity';
import { Professor } from 'src/professores/entities/professor.entity';
import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Turma } from 'src/turmas/entities/turma.entity';
import { Prova } from 'src/provas/entities/prova.entity';
import { ConfigModule } from '@nestjs/config';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST_DATABASE,
      port: Number(process.env.PORT_DATABASE),
      username: process.env.USER_DATABASE,
      password: process.env.PASS_DATABASE,
      database: process.env.NAME_DATABASE,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: process.env.NODE_ENV !== 'production',
      logging: process.env.NODE_ENV === 'development',
      ssl:
        process.env.VERIFY_SSL_DATABASE === 'true'
          ? { rejectUnauthorized: false }
          : false,
    }),
    TypeOrmModule.forFeature([Materia]),
    TypeOrmModule.forFeature([Pergunta]),
    TypeOrmModule.forFeature([Alternativa]),
    TypeOrmModule.forFeature([Professor]),
    TypeOrmModule.forFeature([Aluno]),
    TypeOrmModule.forFeature([Turma]),
    TypeOrmModule.forFeature([Prova]),
    TypeOrmModule.forFeature([Usuario]),
  ],
  providers: [DatabaseRepository],
  exports: [DatabaseRepository, TypeOrmModule, ConfigModule],
})
export class DatabaseModule {}
