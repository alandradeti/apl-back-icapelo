import { Injectable, NotFoundException } from '@nestjs/common';
import { INota } from '../entities/interfaces/nota.entity.interface';
import { NotaRepository } from '../repositories/nota.repository';
import { CreateNotaDto } from '../dtos/createNota.dto';
import { UpdateNotaDto } from '../dtos/updateNota.dto';

@Injectable()
export class NotaService {
  constructor(private readonly notaRepository: NotaRepository) {}

  async findAll(
    limit: number,
    page: number,
    relation: boolean = false,
  ): Promise<INota[]> {
    const populateOptions = relation
      ? { aluno: true, prova: true, periodoAvaliativo: true, materia: true }
      : {};

    return await this.notaRepository.findAll(limit, page, populateOptions);
  }

  async findById(id: string, relation: boolean = false): Promise<INota> {
    const populateOptions = relation
      ? { aluno: true, prova: true, periodoAvaliativo: true, materia: true }
      : {};

    const nota = await this.notaRepository.findById(id, populateOptions);
    if (!nota) {
      throw new NotFoundException('Nota não encontrada!');
    }

    return nota;
  }

  async create(nota: CreateNotaDto): Promise<INota> {
    return await this.notaRepository.create(nota);
  }

  async update(id: string, nota: UpdateNotaDto): Promise<void> {
    await this.notaRepository.update(id, nota);
  }

  async delete(id: string): Promise<void> {
    await this.notaRepository.delete(id);
  }
}
