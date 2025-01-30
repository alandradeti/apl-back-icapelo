import { Injectable, NotFoundException } from '@nestjs/common';
import { AlunoRepository } from '../repositories/aluno.repository';
import { IAluno } from '../entities/interfaces/aluno.entity.interface';
import { CreateAlunoDto } from '../dtos/createAluno.dto';
import { UpdateAlunoDto } from '../dtos/updateAluno.dto';
@Injectable()
export class AlunoService {
  constructor(private readonly alunoRepository: AlunoRepository) {}

  async findAll(
    limit: number,
    page: number,
    relation: boolean = false,
  ): Promise<IAluno[]> {
    const populateOptions = relation
      ? { usuario: true, turmas: true, provas: true }
      : {};

    return await this.alunoRepository.findAll(limit, page, populateOptions);
  }

  async findById(id: string, relation: boolean = false): Promise<IAluno> {
    const populateOptions = relation
      ? { usuario: true, turmas: true, provas: true }
      : {};

    const aluno = await this.alunoRepository.findById(id, populateOptions);
    if (!aluno) {
      throw new NotFoundException('Aluno não encontrado!');
    }

    return aluno;
  }

  async create(aluno: CreateAlunoDto): Promise<IAluno> {
    return await this.alunoRepository.create(aluno);
  }

  async update(id: string, aluno: UpdateAlunoDto): Promise<void> {
    await this.alunoRepository.update(id, aluno);
  }

  async delete(id: string): Promise<void> {
    await this.alunoRepository.delete(id);
  }
}
