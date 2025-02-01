import { Injectable, NotFoundException } from '@nestjs/common';
import { ProvaRepository } from '../repositories/prova.repository';
import { IProva } from '../entities/interfaces/prova.entity.interface';
import { CreateProvaDto } from '../dtos/createProva.dto';
import { UpdateProvaDto } from '../dtos/updateProva.dto';
@Injectable()
export class ProvaService {
  constructor(private readonly provaRepository: ProvaRepository) {}

  async findAll(
    limit: number,
    page: number,
    relation: boolean = false,
  ): Promise<IProva[]> {
    const populateOptions = relation
      ? {
          materia: true,
          perguntas: true,
          professores: true,
          alunos: true,
          periodoAvaliativo: true,
        }
      : {};

    return await this.provaRepository.findAll(limit, page, populateOptions);
  }

  async findById(id: string, relation: boolean = false): Promise<IProva> {
    const populateOptions = relation
      ? {
          materia: true,
          perguntas: true,
          professores: true,
          alunos: true,
          periodoAvaliativo: true,
        }
      : {};

    const prova = await this.provaRepository.findById(id, populateOptions);
    if (!prova) {
      throw new NotFoundException('Prova não encontrada!');
    }

    return prova;
  }

  async create(prova: CreateProvaDto): Promise<IProva> {
    return await this.provaRepository.create(prova);
  }

  async update(id: string, prova: UpdateProvaDto): Promise<void> {
    await this.provaRepository.update(id, prova);
  }

  async delete(id: string): Promise<void> {
    await this.provaRepository.delete(id);
  }
}
