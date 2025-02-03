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
  async getNotaPorMateria(alunoId: string, materiaId: string): Promise<Nota[]> {
    return this.notaRepository
      .createQueryBuilder('nota')
      .innerJoinAndSelect('nota.prova', 'prova')
      .innerJoinAndSelect('prova.periodoAvaliativo', 'periodoAvaliativo')
      .innerJoinAndSelect('prova.materia', 'materia')
      .where('nota.alunoId = :alunoId', { alunoId })
      .andWhere('materia.id = :materiaId', { materiaId })
      .getMany();
  }

  async getNotaPorPeriodoAvaliativo(
    alunoId: string,
    periodoAvaliativoId: string,
  ): Promise<Nota[]> {
    return this.notaRepository
      .createQueryBuilder('nota')
      .innerJoinAndSelect('nota.prova', 'prova')
      .innerJoinAndSelect('prova.materia', 'materia')
      .innerJoinAndSelect('prova.periodoAvaliativo', 'periodoAvaliativo')
      .where('nota.alunoId = :alunoId', { alunoId })
      .andWhere('periodoAvaliativo.id = :periodoAvaliativoId', {
        periodoAvaliativoId,
      })
      .getMany();
  }
}
