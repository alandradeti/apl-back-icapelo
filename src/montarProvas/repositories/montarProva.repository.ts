import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMontarProvaDto } from '../dtos/createMontarProva.dto';
import { IPergunta } from 'src/perguntas/entities/interfaces/pergunta.entity.interface';
import { Pergunta } from 'src/perguntas/entities/pergunta.entity';
import { Repository } from 'typeorm';
import { DatabaseRepository } from 'src/database/repositories/database.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MontarProvaRepository extends DatabaseRepository<Pergunta> {
  constructor(
    @InjectRepository(Pergunta)
    private readonly montarProvaRepository: Repository<Pergunta>,
  ) {
    super(montarProvaRepository);
  }

  // Método para obter as perguntas
  async obterPerguntasParaProva(
    montarProvaDto: CreateMontarProvaDto,
  ): Promise<IPergunta[]> {
    const dificuldade = montarProvaDto.dificuldade;
    const materiaId = montarProvaDto.materiaId;
    const quantidade = montarProvaDto.quantidade;

    const perguntas = await this.montarProvaRepository
      .createQueryBuilder('pergunta')
      .where('pergunta.dificuldade = :dificuldade', { dificuldade })
      .andWhere('pergunta.materiaId = :materiaId', { materiaId })
      .orderBy('RANDOM()')
      .limit(quantidade)
      .getMany();

    if (perguntas.length < quantidade) {
      throw new NotFoundException(
        `Não há perguntas suficientes para a matéria e dificuldade informadas. Solicitado: ${quantidade}, encontrado: ${perguntas.length}`,
      );
    }

    return perguntas;
  }
}
