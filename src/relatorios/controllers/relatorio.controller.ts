import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Nota } from 'src/notas/entities/nota.entity';
import { NotaService } from 'src/notas/services/nota.service';

@ApiTags('Relatorio')
@Controller('relatorio')
export class RelatorioController {
  constructor(private readonly notaService: NotaService) {}

  @ApiOperation({ summary: 'Lista todas notas por matéria' })
  @ApiParam({
    name: 'alunoId',
    type: String,
    description: 'ID do aluno',
    required: true,
  })
  @ApiParam({
    name: 'materiaId',
    type: String,
    description: 'ID da matéria',
    required: true,
  })
  @ApiResponse({
    status: 201,
    description: 'Notas retornadas com sucesso',
    type: Nota,
  })
  @Get('/aluno/:alunoId/materia/:materiaId')
  async obterNotasPorMateria(
    @Param('alunoId') alunoId: string,
    @Param('materiaId') materiaId: string,
  ) {
    return this.notaService.obterNotasPorMateria(alunoId, materiaId);
  }

  @ApiOperation({ summary: 'Lista todas notas por período avaliativo' })
  @ApiParam({ name: 'alunoId', type: String, description: 'ID do aluno' })
  @ApiParam({
    name: 'periodoAvaliativoId',
    type: String,
    description: 'ID do perÍodo avaliativo',
  })
  @ApiResponse({
    status: 201,
    description: 'Notas retornadas com sucesso',
    type: Nota,
  })
  @Get('/aluno/:alunoId/periodo-avaliativo/:periodoAvaliativoId')
  async obterNotasPorPeriodoAvaliativo(
    @Param('alunoId') alunoId: string,
    @Param('periodoAvaliativoId') periodoAvaliativoId: string,
  ) {
    return this.notaService.obterNotasPorPeriodoAvaliativo(
      alunoId,
      periodoAvaliativoId,
    );
  }

  @ApiOperation({
    summary: 'Retorna a média das notas do aluno por período avaliativo',
  })
  @ApiParam({ name: 'alunoId', type: String, description: 'ID do aluno' })
  @ApiParam({
    name: 'periodoId',
    type: String,
    description: 'ID do perÍodo avaliativo',
  })
  @ApiResponse({
    status: 201,
    description: 'Média retornada com sucesso',
    type: Number,
  })
  @Get('media/aluno/:alunoId/:periodoId')
  async obterMediaAlunoPorPeriodo(
    @Param('alunoId') alunoId: string,
    @Param('periodoId') periodoId: string,
  ): Promise<number | null> {
    return this.notaService.getMediaAlunoPorPeriodo(alunoId, periodoId);
  }

  @ApiOperation({
    summary: 'Retorna a média das notas da turma por período avaliativo',
  })
  @ApiParam({ name: 'turmaId', type: String, description: 'ID da turma' })
  @ApiParam({
    name: 'periodoId',
    type: String,
    description: 'ID do perÍodo avaliativo',
  })
  @ApiResponse({
    status: 201,
    description: 'Média retornada com sucesso',
    type: Number,
  })
  @Get('media/turma/:turmaId/:periodoId')
  async getMediaPorTurmaPeriodo(
    @Param('turmaId') turmaId: string,
    @Param('periodoId') periodoId: string,
  ): Promise<number | null> {
    return this.notaService.getMediaPorTurmaPeriodo(turmaId, periodoId);
  }
}
