import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatabaseRepository } from 'src/database/repositories/database.repository';
import { Prova } from '../entities/prova.entity';

@Injectable()
export class ProvaRepository extends DatabaseRepository<Prova> {
  constructor(
    @InjectRepository(Prova)
    private readonly provaRepository: Repository<Prova>,
  ) {
    super(provaRepository);
  }

  //Métodos personalizados para Prova
}
