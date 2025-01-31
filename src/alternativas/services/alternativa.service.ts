import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { UpdateAlternativaDto } from '../dtos/updateAlternativa.dto';
import { CreateAlternativaDto } from '../dtos/createAlternativa.dto';
import { AlternativaRepository } from '../repositories/alternativa.repository';
import { IAlternativa } from '../entities/interfaces/alternativa.entity.interface';

@Injectable()
export class AlternativaService {
  constructor(private readonly alternativaRepository: AlternativaRepository) {}

  async findAll(
    limit: number,
    page: number,
    relation: boolean = false,
  ): Promise<IAlternativa[]> {
    const populateOptions = relation ? { pergunta: true } : {};
    return await this.alternativaRepository.findAll(
      limit,
      page,
      populateOptions,
    );
  }

  async findById(id: string, relation: boolean = false): Promise<IAlternativa> {
    const populateOptions = relation ? { pergunta: true } : {};
    const alternativa = await this.alternativaRepository.findById(
      id,
      populateOptions,
    );
    if (!alternativa) {
      throw new NotFoundException('Alternativa não encontrada!');
    }
    return alternativa;
  }

  async create(alternativa: CreateAlternativaDto): Promise<IAlternativa> {
    return await this.alternativaRepository.create(alternativa);
  }

  async update(id: string, alternativa: UpdateAlternativaDto): Promise<void> {
    await this.alternativaRepository.update(id, alternativa);
  }

  async delete(id: string): Promise<void> {
    await this.alternativaRepository.delete(id);
  }
}
