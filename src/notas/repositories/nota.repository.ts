import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatabaseRepository } from 'src/database/repositories/database.repository';
import { Nota } from '../entities/nota.entity';

@Injectable()
export class NotaRepository extends DatabaseRepository<Nota> {
  constructor(
    @InjectRepository(Nota)
    private readonly notaRepository: Repository<Nota>,
  ) {
    super(notaRepository);
  }

  //Métodos personalizados para Nota
}
