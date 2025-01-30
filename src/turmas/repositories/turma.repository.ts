import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatabaseRepository } from 'src/database/repositories/database.repository';
import { Turma } from '../entities/turma.entity';

@Injectable()
export class TurmaRepository extends DatabaseRepository<Turma> {
  constructor(
    @InjectRepository(Turma)
    private readonly turmaRepository: Repository<Turma>,
  ) {
    super(turmaRepository);
  }

  //Métodos personalizados para Turma
}
