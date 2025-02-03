// src/respostas/correcao.controller.ts
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CorrecaoService } from '../services/correcao.service';
import { CreateCorrecaoDto } from '../dtos/correcaoCreate.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { INota } from 'src/notas/entities/interfaces/nota.entity.interface';
import { Nota } from 'src/notas/entities/nota.entity';

ApiTags('Correção');
@Controller('correcao')
export class CorrecaoController {
  constructor(private readonly correcaoService: CorrecaoService) {}

  @ApiOperation({ summary: 'Corrigir e gravar nota da prova' })
  @ApiBody({
    description: 'Dados para criação',
    type: CreateCorrecaoDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Correção criada com sucesso',
    type: Nota,
  })
  @Post()
  async create(@Body() createCorrecaoDto: CreateCorrecaoDto): Promise<INota> {
    return await this.correcaoService.corrigirEGravarNotaProva(
      createCorrecaoDto,
    );
  }
}
