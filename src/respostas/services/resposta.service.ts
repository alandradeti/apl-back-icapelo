import { Injectable, NotFoundException } from '@nestjs/common';
import { IResposta } from '../entities/interfaces/resposta.entity.interface';
import { CreateRespostaDto } from '../dtos/createResposta.dto';
import { UpdateRespostaDto } from '../dtos/updateResposta.dto';
import { RespostaRepository } from '../repositories/resposta.repository';

@Injectable()
export class RespostaService {
  constructor(private readonly respostaRepository: RespostaRepository) {}

  async obterRespostasPorAlunoProva(alunoId: string, provaId: string) {
    return await this.respostaRepository.getRespostasByAlunoProva(
      alunoId,
      provaId,
    );
  }

  async findAll(
    limit: number,
    page: number,
    relation: boolean = false,
  ): Promise<IResposta[]> {
    const populateOptions = relation
      ? {
          aluno: true,
          prova: true,
          pergunta: true,
          alternativa: true,
        }
      : {};

    return await this.respostaRepository.findAll(limit, page, populateOptions);
  }

  async findById(id: string, relation: boolean = false): Promise<IResposta> {
    const populateOptions = relation
      ? {
          aluno: true,
          prova: true,
          pergunta: true,
          alternativa: true,
        }
      : {};

    const resposta = await this.respostaRepository.findById(
      id,
      populateOptions,
    );
    if (!resposta) {
      throw new NotFoundException('Resposta não encontrado!');
    }

    return resposta;
  }

  async create(resposta: CreateRespostaDto): Promise<IResposta> {
    return await this.respostaRepository.create(resposta);
  }

  async update(id: string, resposta: UpdateRespostaDto): Promise<void> {
    await this.respostaRepository.update(id, resposta);
  }

  async delete(id: string): Promise<void> {
    await this.respostaRepository.delete(id);
  }
}
