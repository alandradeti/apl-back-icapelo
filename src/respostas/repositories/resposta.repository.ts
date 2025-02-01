import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatabaseRepository } from 'src/database/repositories/database.repository';
import { Resposta } from '../entities/resposta.entity';

@Injectable()
export class RespostaRepository extends DatabaseRepository<Resposta> {
  constructor(
    @InjectRepository(Resposta)
    private readonly respostaRepository: Repository<Resposta>,
  ) {
    super(respostaRepository);
  }

  //Métodos personalizados para Resposta
}
