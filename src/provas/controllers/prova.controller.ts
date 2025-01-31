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
import { ProvaService } from '../services/prova.service';
import { CreateProvaDto } from '../dtos/createProva.dto';
import { Prova } from '../entities/prova.entity';
import { IProva } from '../entities/interfaces/prova.entity.interface';
import { UpdateProvaDto } from '../dtos/updateProva.dto';

@ApiTags('Prova')
@Controller('prova')
export class ProvaController {
  constructor(private readonly provaService: ProvaService) {}

  @ApiOperation({ summary: 'Cria uma nova prova' })
  @ApiBody({
    description: 'Dados para criação',
    type: CreateProvaDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Prova criada com sucesso',
    type: Prova,
  })
  @Post()
  async create(@Body() createProvaDto: CreateProvaDto): Promise<IProva> {
    return this.provaService.create(createProvaDto);
  }

  @ApiOperation({ summary: 'Lista todas as provas' })
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
    description: 'Lista de provas retornada com sucesso',
    type: [Prova],
  })
  @Get()
  async findAll(
    @Query('limite') limite: number = PAGINATION.DEFAULT_LIMIT,
    @Query('pagina') pagina: number = PAGINATION.DEFAULT_PAGE,
  ): Promise<IProva[]> {
    return this.provaService.findAll(limite, pagina);
  }

  @ApiOperation({ summary: 'Lista todas as provas detalhadamente ' })
  @ApiQuery({
    name: 'limite',
    required: true,
    type: Number,
    description: 'Limite de provas por página',
  })
  @ApiQuery({
    name: 'pagina',
    required: true,
    type: Number,
    description: 'Número da página',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de provas retornada com sucesso',
    type: [Prova],
  })
  @Get('/detalhe')
  async findAllWithEntities(
    @Query('limite') limite: number,
    @Query('pagina') pagina: number,
  ): Promise<IProva[]> {
    return this.provaService.findAll(limite, pagina, true);
  }

  @ApiOperation({ summary: 'Busca uma prova detalhadamente pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da prova', required: true })
  @ApiResponse({
    status: 200,
    description: 'Prova encontrada com sucesso',
    type: Prova,
  })
  @Get('/detalhe/:id')
  async findByIdWithEntities(@Param('id') id: string): Promise<IProva | null> {
    return this.provaService.findById(id, true);
  }

  @ApiOperation({ summary: 'Busca uma prova pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da prova', required: true })
  @ApiResponse({
    status: 200,
    description: 'Prova encontrada com sucesso',
    type: Prova,
  })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<IProva | null> {
    return this.provaService.findById(id);
  }

  @ApiOperation({ summary: 'Atualiza uma prova pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da prova', required: true })
  @ApiBody({
    description: 'Dados para atualização',
    type: UpdateProvaDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Prova atualizada com sucesso',
    type: Prova,
  })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProvaDto: UpdateProvaDto,
  ): Promise<{ message: string }> {
    await this.provaService.update(id, updateProvaDto);
    return { message: 'Prova atualizada com sucesso' };
  }

  @ApiOperation({ summary: 'Remove uma prova pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da prova', required: true })
  @ApiResponse({ status: 200, description: 'Prova removida com sucesso' })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.provaService.delete(id);
    return { message: 'Prova removida com sucesso' };
  }
}
