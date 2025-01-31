import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreatePerguntaDto } from 'src/perguntas/dtos/createPergunta.dto';
import { UpdatePerguntaDto } from 'src/perguntas/dtos/updatePergunta.dto';
import { PerguntaRepository } from 'src/perguntas/repositories/pergunta.repository';
import { IPergunta } from '../entities/interfaces/pergunta.entity.interface';
import { Pergunta } from '../entities/pergunta.entity';
import { FindOptionsRelations } from 'typeorm';

@Injectable()
export class PerguntaService {
  constructor(private readonly perguntaRepository: PerguntaRepository) {}

  async findAll(
    limit: number,
    page: number,
    relation: boolean = false,
  ): Promise<IPergunta[]> {
    const populateOptions = relation
      ? { alternativas: true, provas: true, materia: true }
      : {};
    return await this.perguntaRepository.findAll(limit, page, populateOptions);
  }

  async findById(id: string, relation: boolean = false): Promise<IPergunta> {
    const populateOptions = relation
      ? { alternativas: true, provas: true, materia: true }
      : {};
    const pergunta = await this.perguntaRepository.findById(
      id,
      populateOptions,
    );
    if (!pergunta) {
      throw new NotFoundException('Pergunta não encontrada!');
    }
    return pergunta;
  }

  async create(pergunta: CreatePerguntaDto): Promise<IPergunta> {
    return await this.perguntaRepository.create(pergunta);
  }

  async update(id: string, pergunta: UpdatePerguntaDto): Promise<void> {
    await this.perguntaRepository.update(id, pergunta);
  }

  async delete(id: string): Promise<void> {
    await this.perguntaRepository.delete(id);
  }
}
