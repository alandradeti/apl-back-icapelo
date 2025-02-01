import { Injectable, NotFoundException } from '@nestjs/common';
import { IProfessor } from '../entities/interfaces/professor.entity.interface';
import { ProfessorRepository } from '../repositories/professor.repository';
import { CreateProfessorDto } from '../dtos/createProfessor.dto';
import { UpdateProfessorDto } from '../dtos/updateProfessor.dto';
@Injectable()
export class ProfessorService {
  constructor(private readonly professorRepository: ProfessorRepository) {}

  async findAll(
    limit: number,
    page: number,
    relation: boolean = false,
  ): Promise<IProfessor[]> {
    const populateOptions = relation
      ? { usuario: true, materias: true, turmas: true, provas: true }
      : {};

    return await this.professorRepository.findAll(limit, page, populateOptions);
  }

  async findById(id: string, relation: boolean = false): Promise<IProfessor> {
    const populateOptions = relation
      ? { usuario: true, materias: true, turmas: true, provas: true }
      : {};

    const professor = await this.professorRepository.findById(
      id,
      populateOptions,
    );
    if (!professor) {
      throw new NotFoundException('Professor não encontrado!');
    }

    return professor;
  }

  async create(professor: CreateProfessorDto): Promise<IProfessor> {
    return await this.professorRepository.create(professor);
  }

  async update(id: string, professor: UpdateProfessorDto): Promise<void> {
    await this.professorRepository.update(id, professor);
  }

  async delete(id: string): Promise<void> {
    await this.professorRepository.delete(id);
  }
}
