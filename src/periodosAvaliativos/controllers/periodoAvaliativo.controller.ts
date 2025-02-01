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
import { PeriodoAvaliativoService } from '../services/periodoAvaliativo.service';
import { CreatePeriodoAvaliativoDto } from '../dtos/createPeriodoAvaliativo.dto';
import { IPeriodoAvaliativo } from '../entities/interfaces/periodoAvaliativo.entity.interface';
import { PeriodoAvaliativo } from '../entities/periodoAvaliativo.entity';
import { UpdatePeriodoAvaliativoDto } from '../dtos/updatePeriodoAvaliativo.dto';

@ApiTags('Período Avaliativo')
@Controller('periodo-avaliativo')
export class PeriodoAvaliativoController {
  constructor(
    private readonly periodoAvaliativoService: PeriodoAvaliativoService,
  ) {}

  @ApiOperation({ summary: 'Cria um novo período avaliativo' })
  @ApiBody({
    description: 'Dados para criação',
    type: CreatePeriodoAvaliativoDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Período avaliativo criado com sucesso',
    type: PeriodoAvaliativo,
  })
  @Post()
  async create(
    @Body() createPeriodoAvaliativoDto: CreatePeriodoAvaliativoDto,
  ): Promise<IPeriodoAvaliativo> {
    return this.periodoAvaliativoService.create(createPeriodoAvaliativoDto);
  }

  @ApiOperation({ summary: 'Lista todos os períodos avaliativos' })
  @ApiQuery({
    name: 'limite',
    required: true,
    type: Number,
    description: 'Limite de períodos avaliativos por página',
  })
  @ApiQuery({
    name: 'pagina',
    required: true,
    type: Number,
    description: 'Número da página',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de períodos avaliativos retornado com sucesso',
    type: [PeriodoAvaliativo],
  })
  @Get()
  async findAll(
    @Query('limite') limite: number = PAGINATION.DEFAULT_LIMIT,
    @Query('pagina') pagina: number = PAGINATION.DEFAULT_PAGE,
  ): Promise<IPeriodoAvaliativo[]> {
    return this.periodoAvaliativoService.findAll(limite, pagina);
  }

  @ApiOperation({
    summary: 'Lista todos os períodos avaliativos detalhadamente',
  })
  @ApiQuery({
    name: 'limite',
    required: true,
    type: Number,
    description: 'Limite de períodos avaliativos por página',
  })
  @ApiQuery({
    name: 'pagina',
    required: true,
    type: Number,
    description: 'Número da página',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de períodos avaliativos retornada com sucesso',
    type: [PeriodoAvaliativo],
  })
  @Get('/detalhe')
  async findAllWithEntities(
    @Query('limite') limite: number,
    @Query('pagina') pagina: number,
  ): Promise<IPeriodoAvaliativo[]> {
    return this.periodoAvaliativoService.findAll(limite, pagina, true);
  }

  @ApiOperation({
    summary: 'Busca um período avaliativo detalhadamente pelo ID',
  })
  @ApiParam({
    name: 'id',
    description: 'ID do período avaliativo',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Período avaliativo encontrado com sucesso',
    type: PeriodoAvaliativo,
  })
  @Get('/detalhe/:id')
  async findByIdWithEntities(
    @Param('id') id: string,
  ): Promise<IPeriodoAvaliativo | null> {
    const populateOptions = {
      materias: true,
      turmas: true,
      provas: true,
    };
    return this.periodoAvaliativoService.findById(id, true);
  }

  @ApiOperation({ summary: 'Busca um período avaliativo pelo ID' })
  @ApiParam({
    name: 'id',
    description: 'ID do período avaliativo',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Período avaliativo encontrado com sucesso',
    type: PeriodoAvaliativo,
  })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<IPeriodoAvaliativo | null> {
    return this.periodoAvaliativoService.findById(id);
  }

  @ApiOperation({ summary: 'Atualiza uma período avaliativo pelo ID' })
  @ApiParam({
    name: 'id',
    description: 'ID do período avaliativo',
    required: true,
  })
  @ApiBody({
    description: 'Dados para atualização',
    type: UpdatePeriodoAvaliativoDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Período avaliativo atualizado com sucesso',
    type: PeriodoAvaliativo,
  })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePeriodoAvaliativoDto: UpdatePeriodoAvaliativoDto,
  ): Promise<{ message: string }> {
    await this.periodoAvaliativoService.update(id, updatePeriodoAvaliativoDto);
    return { message: 'Período avaliativo atualizado com sucesso' };
  }

  @ApiOperation({ summary: 'Remove um período avaliativo pelo ID' })
  @ApiParam({
    name: 'id',
    description: 'ID do período avaliativo',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Período avaliativo removido com sucesso',
  })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.periodoAvaliativoService.delete(id);
    return { message: 'Período avaliativo removido com sucesso' };
  }
}
