// src/respostas/correcao.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MontarProvaService } from '../services/montarProva.service';
import { CreateMontarProvaDto } from '../dtos/createMontarProva.dto';
import { Prova } from 'src/provas/entities/prova.entity';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';

@ApiTags('Montar prova')
@Controller('montar-prova')
export class MontarProvaController {
  constructor(private readonly montarProvaService: MontarProvaService) {}

  @ApiOperation({ summary: 'Cria uma prova' })
  @ApiBody({
    description: 'Dados para criação',
    type: CreateMontarProvaDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Prova criada com sucesso',
    type: Prova,
  })
  @Post()
  async create(
    @Body() createMontarProvaDto: CreateMontarProvaDto,
  ): Promise<IProva> {
    return await this.montarProvaService.montarProva(createMontarProvaDto);
  }
}
