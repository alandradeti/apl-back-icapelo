import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatabaseRepository } from 'src/database/repositories/database.repository';
import { Aluno } from '../entities/aluno.entity';

@Injectable()
export class AlunoRepository extends DatabaseRepository<Aluno> {
  constructor(
    @InjectRepository(Aluno)
    private readonly alunoRepository: Repository<Aluno>,
  ) {
    super(alunoRepository);
  }

  //Métodos personalizados para Aluno
}
