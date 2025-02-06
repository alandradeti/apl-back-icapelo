import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { NotaService } from "src/notas/services/nota.service";

@ApiTags('Relatorio')
@Controller('relatorio')
export class RelatorioController {
  constructor(
    private readonly notaService: NotaService,
  ) {}

  @Get('media/aluno/:alunoId/:periodoId')
  async getAlunoMediaNotaPeriodo(
    @Param('alunoId') alunoId: string,
    @Param('periodoId') periodoId: string
  ): Promise<number | null> {
    return this.notaService.getMediaPorPeriodo(alunoId, periodoId);
  }

  @Get('media/turma/:turmaId/:periodoId')
  async getMediaPorTurmaPeriodo(
    @Param('turmaId') turmaId: string,
    @Param('periodoId') periodoId: string
  ): Promise<number | null> {
    return this.notaService.getMediaPorPeriodo(turmaId, periodoId);
  }
}