// src/respostas/correcao.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNotaDto } from 'src/notas/dtos/createNota.dto';
import { INota } from 'src/notas/entities/interfaces/nota.entity.interface';
import { Nota } from 'src/notas/entities/nota.entity';
import { NotaRepository } from 'src/notas/repositories/nota.repository';
import { RespostaRepository } from 'src/respostas/repositories/resposta.repository';
import { CreateCorrecaoDto } from '../dtos/correcaoCreate.dto';

@Injectable()
export class CorrecaoService {
  constructor(
    private readonly respostaRepository: RespostaRepository,
    private readonly notaRepository: NotaRepository,
  ) {}

  async calcularNotaProva(
    createCorrecaoDto: CreateCorrecaoDto,
  ): Promise<number> {
    const respostas = await this.respostaRepository.getRespostasByAlunoProva(
      createCorrecaoDto.alunoId,
      createCorrecaoDto.provaId,
    );

    if (!respostas || respostas.length === 0) {
      throw new NotFoundException(
        'Nenhuma resposta encontrada para essa combinação.',
      );
    }

    const totalQuestoes = respostas.length;
    const acertos = respostas.reduce(
      (acc, resposta) => acc + (resposta.alternativa.correta ? 1 : 0),
      0,
    );

    const notaFinal = (acertos / totalQuestoes) * 10;
    return parseFloat(notaFinal.toFixed(2));
  }

  async corrigirEGravarNotaProva(
    createCorrecaoDto: CreateCorrecaoDto,
  ): Promise<INota> {
    const notaCalculada = await this.calcularNotaProva(createCorrecaoDto);

    return await this.notaRepository.create({
      aluno: { id: createCorrecaoDto.alunoId } as any,
      prova: { id: createCorrecaoDto.provaId } as any,
      nota: notaCalculada,
    });
  }
}
