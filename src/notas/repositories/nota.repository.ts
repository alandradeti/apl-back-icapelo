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

  async getMediaAlunoPorPeriodo(alunoId: string, periodoId: string): Promise<number | null> {
    const resultado = await this.notaRepository.createQueryBuilder('nota')
      .select('AVG(nota.nota)', 'media')
      .innerJoin('nota.prova', 'prova')
      .innerJoin('prova.periodoAvaliativo', 'periodo')
      .where('nota.alunoId = :alunoId', { alunoId })
      .andWhere('periodo.id = :periodoId', { periodoId })
      .getRawOne();

    return resultado?.media ? parseFloat(resultado.media) : null;
  }

  async getMediaTurmaPorPeriodo(turmaId: string, periodoId: string): Promise<number | null> {
    const resultado = await this.notaRepository.createQueryBuilder('nota')
      .select('AVG(nota.nota)', 'media')
      .innerJoin('nota.aluno', 'aluno')
      .innerJoin('aluno.turmas', 'turma')
      .innerJoin('nota.prova', 'prova')
      .innerJoin('prova.periodoAvaliativo', 'periodo')
      .where('turma.id = :turmaId', { turmaId })
      .andWhere('periodo.id = :periodoId', { periodoId })
      .getRawOne();

    return resultado?.media ? parseFloat(resultado.media) : null;
  }
}
