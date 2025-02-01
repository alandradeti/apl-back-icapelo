import { Injectable, NotFoundException } from '@nestjs/common';
import { IPeriodoAvaliativo } from '../entities/interfaces/periodoAvaliativo.entity.interface';
import { CreatePeriodoAvaliativoDto } from '../dtos/createPeriodoAvaliativo.dto';
import { UpdatePeriodoAvaliativoDto } from '../dtos/updatePeriodoAvaliativo.dto';
import { PeriodoAvaliativoRepository } from '../repositories/periodoAvaliativo.repository';

@Injectable()
export class PeriodoAvaliativoService {
  constructor(
    private readonly periodoAvaliativoRepository: PeriodoAvaliativoRepository,
  ) {}

  async findAll(
    limit: number,
    page: number,
    relation: boolean = false,
  ): Promise<IPeriodoAvaliativo[]> {
    const populateOptions = relation ? { provas: true } : {};

    return await this.periodoAvaliativoRepository.findAll(
      limit,
      page,
      populateOptions,
    );
  }

  async findById(
    id: string,
    relation: boolean = false,
  ): Promise<IPeriodoAvaliativo> {
    const populateOptions = relation ? { provas: true } : {};

    const periodoAvaliativo = await this.periodoAvaliativoRepository.findById(
      id,
      populateOptions,
    );
    if (!periodoAvaliativo) {
      throw new NotFoundException('Período avaliativo não encontrado!');
    }

    return periodoAvaliativo;
  }

  async create(
    periodoAvaliativo: CreatePeriodoAvaliativoDto,
  ): Promise<IPeriodoAvaliativo> {
    return await this.periodoAvaliativoRepository.create(periodoAvaliativo);
  }

  async update(
    id: string,
    periodoAvaliativo: UpdatePeriodoAvaliativoDto,
  ): Promise<void> {
    await this.periodoAvaliativoRepository.update(id, periodoAvaliativo);
  }

  async delete(id: string): Promise<void> {
    await this.periodoAvaliativoRepository.delete(id);
  }
}
