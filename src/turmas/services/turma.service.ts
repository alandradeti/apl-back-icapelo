import { Injectable, NotFoundException } from '@nestjs/common';
import { TurmaRepository } from '../repositories/turma.repository';
import { ITurma } from '../entities/interfaces/tuma.entity.interface';
import { UpdateTurmaDto } from '../dtos/updateTurma.dto';
import { CreateTurmaDto } from '../dtos/createTurma.dto';
@Injectable()
export class TurmaService {
  constructor(private readonly turmaRepository: TurmaRepository) {}

  async findAll(
    limit: number,
    page: number,
    relation: boolean = false,
  ): Promise<ITurma[]> {
    const populateOptions = relation
      ? {
          professores: true,
          alunos: true,
        }
      : {};

    return await this.turmaRepository.findAll(limit, page, populateOptions);
  }

  async findById(id: string, relation: boolean = false): Promise<ITurma> {
    const populateOptions = relation
      ? {
          professores: true,
          alunos: true,
        }
      : {};

    const turma = await this.turmaRepository.findById(id, populateOptions);
    if (!turma) {
      throw new NotFoundException('Turma não encontrada!');
    }

    return turma;
  }

  async create(turma: CreateTurmaDto): Promise<ITurma> {
    return await this.turmaRepository.create(turma);
  }

  async update(id: string, turma: UpdateTurmaDto): Promise<void> {
    await this.turmaRepository.update(id, turma);
  }

  async delete(id: string): Promise<void> {
    await this.turmaRepository.delete(id);
  }
}
