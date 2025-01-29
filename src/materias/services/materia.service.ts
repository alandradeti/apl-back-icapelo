import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { IMateria } from '../entities/interfaces/materia.entity.interface';
import { CreateMateriaDto } from '../dtos/createMateria.dto';
import { UpdateMateriaDto } from '../dtos/updateMateria.dto';
import { MateriaRepository } from '../repositories/materia.repository';
import { FindOptionsRelations } from 'typeorm';
import { Materia } from '../entities/materia.entity';

@Injectable()
export class MateriaService {
  constructor(private readonly materiaRepository: MateriaRepository) {}

  async findAll(
    limit: number,
    page: number,
    populateOptions: FindOptionsRelations<Materia> = {},
  ): Promise<IMateria[]> {
    try {
      return await this.materiaRepository.findAll(limit, page, populateOptions);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar matérias.');
    }
  }

  async findById(
    id: string,
    populateOptions: FindOptionsRelations<Materia> = {},
  ): Promise<IMateria> {
    try {
      const materia = await this.materiaRepository.findById(
        id,
        populateOptions,
      );
      if (!materia) {
        throw new NotFoundException('Matéria não encontrada!');
      }
      return materia;
    } catch (error) {
      throw new NotFoundException('Matéria não encontrada!');
    }
  }

  async create(materia: CreateMateriaDto): Promise<IMateria> {
    return await this.materiaRepository.create(materia);
  }

  async update(id: string, materia: UpdateMateriaDto): Promise<void> {
    try {
      await this.materiaRepository.update(id, materia);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Erro ao atualizar matéria.');
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.materiaRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao excluir matéria.');
    }
  }
}
