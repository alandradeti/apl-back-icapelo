import { Injectable, NotFoundException } from '@nestjs/common';
import { IMateria } from '../entities/interfaces/materia.entity.interface';
import { CreateMateriaDto } from '../dtos/createMateria.dto';
import { UpdateMateriaDto } from '../dtos/updateMateria.dto';
import { MateriaRepository } from '../repositories/materia.repository';

@Injectable()
export class MateriaService {
  constructor(private readonly materiaRepository: MateriaRepository) {}

  async findAll(
    limit: number,
    page: number,
    relation: boolean = false,
  ): Promise<IMateria[]> {
    const populateOptions = relation
      ? {
          notas: true,
          perguntas: true,
          provas: true,
          professores: true,
          turmas: true,
        }
      : {};
    return await this.materiaRepository.findAll(limit, page, populateOptions);
  }

  async findById(id: string, relation: boolean = false): Promise<IMateria> {
    const populateOptions = relation
      ? {
          notas: true,
          perguntas: true,
          provas: true,
          professores: true,
          turmas: true,
        }
      : {};
    const materia = await this.materiaRepository.findById(id, populateOptions);
    if (!materia) {
      throw new NotFoundException('Matéria não encontrada!');
    }
    return materia;
  }

  async create(materia: CreateMateriaDto): Promise<IMateria> {
    return await this.materiaRepository.create(materia);
  }

  async update(id: string, materia: UpdateMateriaDto): Promise<void> {
    await this.materiaRepository.update(id, materia);
  }

  async delete(id: string): Promise<void> {
    await this.materiaRepository.delete(id);
  }
}
