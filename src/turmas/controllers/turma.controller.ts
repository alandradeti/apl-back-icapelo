import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PAGINATION } from 'src/database/contants/database.constants';
import { TurmaService } from '../services/turma.service';
import { CreateTurmaDto } from '../dtos/createTurma.dto';
import { Turma } from '../entities/turma.entity';
import { ITurma } from '../entities/interfaces/tuma.entity.interface';
import { UpdateTurmaDto } from '../dtos/updateTurma.dto';

@ApiTags('Turma')
@Controller('turma')
export class TurmaController {
  constructor(private readonly turmaService: TurmaService) {}

  @ApiOperation({ summary: 'Cria uma nova turma' })
  @ApiBody({
    description: 'Dados para criação',
    type: CreateTurmaDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Turma criada com sucesso',
    type: Turma,
  })
  @Post()
  async create(@Body() createTurmaDto: CreateTurmaDto): Promise<ITurma> {
    return this.turmaService.create(createTurmaDto);
  }

  @ApiOperation({ summary: 'Lista todas as turmas' })
  @ApiQuery({
    name: 'limite',
    required: true,
    type: Number,
    description: 'Limite de itens por página',
  })
  @ApiQuery({
    name: 'pagina',
    required: true,
    type: Number,
    description: 'Número da página',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de turmas retornada com sucesso',
    type: [Turma],
  })
  @Get()
  async findAll(
    @Query('limite') limite: number = PAGINATION.DEFAULT_LIMIT,
    @Query('pagina') pagina: number = PAGINATION.DEFAULT_PAGE,
  ): Promise<ITurma[]> {
    return this.turmaService.findAll(limite, pagina);
  }

  @ApiOperation({ summary: 'Lista todas as turmas detalhadamente ' })
  @ApiQuery({
    name: 'limite',
    required: true,
    type: Number,
    description: 'Limite de turmas por página',
  })
  @ApiQuery({
    name: 'pagina',
    required: true,
    type: Number,
    description: 'Número da página',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de turmas retornada com sucesso',
    type: [Turma],
  })
  @Get('/detalhe')
  async findAllWithEntities(
    @Query('limite') limite: number,
    @Query('pagina') pagina: number,
  ): Promise<ITurma[]> {
    return this.turmaService.findAll(limite, pagina, true);
  }

  @ApiOperation({ summary: 'Busca uma turma detalhadamente pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da turma', required: true })
  @ApiResponse({
    status: 200,
    description: 'Turma encontrada com sucesso',
    type: Turma,
  })
  @Get('/detalhe/:id')
  async findByIdWithEntities(@Param('id') id: string): Promise<ITurma | null> {
    return this.turmaService.findById(id, true);
  }

  @ApiOperation({ summary: 'Busca uma turma pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da turma', required: true })
  @ApiResponse({
    status: 200,
    description: 'Turma encontrada com sucesso',
    type: Turma,
  })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<ITurma | null> {
    return this.turmaService.findById(id);
  }

  @ApiOperation({ summary: 'Atualiza uma turma pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da turma', required: true })
  @ApiBody({
    description: 'Dados para atualização',
    type: UpdateTurmaDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Turma atualizada com sucesso',
    type: Turma,
  })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTurmaDto: UpdateTurmaDto,
  ): Promise<{ message: string }> {
    await this.turmaService.update(id, updateTurmaDto);
    return { message: 'Turma atualizada com sucesso' };
  }

  @ApiOperation({ summary: 'Remove uma turma pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da turma', required: true })
  @ApiResponse({ status: 200, description: 'Turma removida com sucesso' })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.turmaService.delete(id);
    return { message: 'Turma removida com sucesso' };
  }
}
