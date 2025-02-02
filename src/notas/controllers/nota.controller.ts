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
import { NotaService } from '../services/nota.service';
import { CreateNotaDto } from '../dtos/createNota.dto';
import { Nota } from '../entities/nota.entity';
import { INota } from '../entities/interfaces/nota.entity.interface';
import { UpdateNotaDto } from '../dtos/updateNota.dto';

@ApiTags('Nota')
@Controller('nota')
export class NotaController {
  constructor(private readonly notaService: NotaService) {}

  @ApiOperation({ summary: 'Cria uma nova nota' })
  @ApiBody({
    description: 'Dados para criação',
    type: CreateNotaDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Nota criada com sucesso',
    type: Nota,
  })
  @Post()
  async create(@Body() createNotaDto: CreateNotaDto): Promise<INota> {
    return this.notaService.create(createNotaDto);
  }

  @ApiOperation({ summary: 'Lista todos as notas' })
  @ApiQuery({
    name: 'limite',
    required: true,
    type: Number,
    description: 'Limite de notas por página',
  })
  @ApiQuery({
    name: 'pagina',
    required: true,
    type: Number,
    description: 'Número da página',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de notas retornada com sucesso',
    type: [Nota],
  })
  @Get()
  async findAll(
    @Query('limite') limite: number = PAGINATION.DEFAULT_LIMIT,
    @Query('pagina') pagina: number = PAGINATION.DEFAULT_PAGE,
  ): Promise<INota[]> {
    return this.notaService.findAll(limite, pagina);
  }

  @ApiOperation({ summary: 'Lista todos as notas detalhadamente' })
  @ApiQuery({
    name: 'limite',
    required: true,
    type: Number,
    description: 'Limite de notas por página',
  })
  @ApiQuery({
    name: 'pagina',
    required: true,
    type: Number,
    description: 'Número da página',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de notas retornada com sucesso',
    type: [Nota],
  })
  @Get('/detalhe')
  async findAllWithEntities(
    @Query('limite') limite: number,
    @Query('pagina') pagina: number,
  ): Promise<INota[]> {
    return this.notaService.findAll(limite, pagina, true);
  }

  @ApiOperation({ summary: 'Busca uma nota detalhadamente pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da nota', required: true })
  @ApiResponse({
    status: 200,
    description: 'Nota encontrada com sucesso',
    type: Nota,
  })
  @Get('/detalhe/:id')
  async findByIdWithEntities(@Param('id') id: string): Promise<INota | null> {
    const populateOptions = {
      materias: true,
      turmas: true,
      provas: true,
    };
    return this.notaService.findById(id, true);
  }

  @ApiOperation({ summary: 'Busca uma nota pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da nota', required: true })
  @ApiResponse({
    status: 200,
    description: 'Nota encontrada com sucesso',
    type: Nota,
  })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<INota | null> {
    return this.notaService.findById(id);
  }

  @ApiOperation({ summary: 'Atualiza uma nota pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da nota', required: true })
  @ApiBody({
    description: 'Dados para atualização',
    type: UpdateNotaDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Nota atualizada com sucesso',
    type: Nota,
  })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateNotaDto: UpdateNotaDto,
  ): Promise<{ message: string }> {
    await this.notaService.update(id, updateNotaDto);
    return { message: 'Nota atualizada com sucesso' };
  }

  @ApiOperation({ summary: 'Remove uma nota pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da nota', required: true })
  @ApiResponse({ status: 200, description: 'Nota removida com sucesso' })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.notaService.delete(id);
    return { message: 'Nota removida com sucesso' };
  }
}
