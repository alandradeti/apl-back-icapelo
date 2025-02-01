import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatabaseRepository } from 'src/database/repositories/database.repository';
import { PeriodoAvaliativo } from '../entities/periodoAvaliativo.entity';

@Injectable()
export class PeriodoAvaliativoRepository extends DatabaseRepository<PeriodoAvaliativo> {
  constructor(
    @InjectRepository(PeriodoAvaliativo)
    private readonly periodoAvaliativoRepository: Repository<PeriodoAvaliativo>,
  ) {
    super(periodoAvaliativoRepository);
  }

  //Métodos personalizados para PeriodoAvaliativo
}
