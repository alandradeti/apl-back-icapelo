import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProvaRepository } from 'src/provas/repositories/prova.repository';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';
import { ProvaStatus } from 'src/provas/enums/provaStatus.enum';
import { MontarProvaRepository } from '../repositories/montarProva.repository';
import { CreateMontarProvaDto } from '../dtos/createMontarProva.dto';
import { Prova } from 'src/provas/entities/prova.entity';

@Injectable()
export class MontarProvaService {
  constructor(
    private readonly montarProvaRepository: MontarProvaRepository,
    private readonly provaRepository: ProvaRepository,
  ) {}

  async montarProva(
    createMontarProvaDto: CreateMontarProvaDto,
  ): Promise<IProva> {
    const perguntasProva =
      await this.montarProvaRepository.obterPerguntasParaProva(
        createMontarProvaDto,
      );

    return await this.provaRepository.create({
      titulo: createMontarProvaDto.titulo,
      materia: { id: createMontarProvaDto.materiaId } as any,
      alunos: { id: createMontarProvaDto.alunosIds } as any,
      status: ProvaStatus.ABERTA,
      professor: { id: createMontarProvaDto.professorId } as any,
      periodoAvaliativo: {
        id: createMontarProvaDto.periodoAvaliativoId,
      } as any,
      perguntas: perguntasProva,
    });
  }
}
