import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { UpdateAlternativaDto } from '../dtos/updateAlternativa.dto';
import { CreateAlternativaDto } from '../dtos/createAlternativa.dto';
import { AlternativaRepository } from '../repositories/alternativa.repository';
import { IAlternativa } from '../entities/interfaces/alternativa.entity.interface';
import { Alternativa } from '../entities/alternativa.entity';
import { FindOptionsRelations } from 'typeorm';

@Injectable()
export class AlternativaService {
  constructor(private readonly alternativaRepository: AlternativaRepository) {}

  async findAll(limit: number, page: number, populateOptions: FindOptionsRelations<Alternativa> = {}): Promise<IAlternativa[]> {
    try {
      return await this.alternativaRepository.findAll(limit, page, populateOptions);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao buscar alternativas.');
    }
  }

  async findById(id: string, populateOptions: FindOptionsRelations<Alternativa> = {}): Promise<IAlternativa> {
    try {
      const alternativa = await this.alternativaRepository.findById(id, populateOptions);
      if (!alternativa) {
        throw new NotFoundException('Alternativa não encontrada!');
      }
      return alternativa;
    } catch (error) {
      throw new NotFoundException('Alternativa não encontrada!');
    }
  }

  async create(alternativa: CreateAlternativaDto): Promise<IAlternativa> {
    try {
      return await this.alternativaRepository.create(alternativa);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao criar alternativa.');
    }
  }

  async update(id: string, alternativa: UpdateAlternativaDto): Promise<void> {
    try {
      await this.alternativaRepository.update(id, alternativa);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Erro ao atualizar alternativa.');
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.alternativaRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException('Erro ao excluir alternativa.');
    }
  }
}
