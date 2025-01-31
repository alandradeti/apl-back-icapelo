import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatabaseRepository } from 'src/database/repositories/database.repository';
import { Professor } from '../entities/professor.entity';

@Injectable()
export class ProfessorRepository extends DatabaseRepository<Professor> {
  constructor(
    @InjectRepository(Professor)
    private readonly professorRepository: Repository<Professor>,
  ) {
    super(professorRepository);
  }

  //Métodos personalizados para Professor
}
