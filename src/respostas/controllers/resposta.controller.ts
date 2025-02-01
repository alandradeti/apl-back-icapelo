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
import { RespostaService } from '../services/resposta.service';
import { CreateRespostaDto } from '../dtos/createResposta.dto';
import { Resposta } from '../entities/resposta.entity';
import { IResposta } from '../entities/interfaces/resposta.entity.interface';
import { UpdateRespostaDto } from '../dtos/updateResposta.dto';

@ApiTags('Resposta')
@Controller('resposta')
export class RespostaController {
  constructor(private readonly respostaService: RespostaService) {}

  @ApiOperation({ summary: 'Cria uma nova resposta' })
  @ApiBody({
    description: 'Dados para criação',
    type: CreateRespostaDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Resposta criada com sucesso',
    type: Resposta,
  })
  @Post()
  async create(
    @Body() createRespostaDto: CreateRespostaDto,
  ): Promise<IResposta> {
    return this.respostaService.create(createRespostaDto);
  }

  @ApiOperation({ summary: 'Lista todas as respostas' })
  @ApiQuery({
    name: 'limite',
    required: true,
    type: Number,
    description: 'Limite de respostas por página',
  })
  @ApiQuery({
    name: 'pagina',
    required: true,
    type: Number,
    description: 'Número da página',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de respostas retornada com sucesso',
    type: [Resposta],
  })
  @Get()
  async findAll(
    @Query('limite') limite: number = PAGINATION.DEFAULT_LIMIT,
    @Query('pagina') pagina: number = PAGINATION.DEFAULT_PAGE,
  ): Promise<IResposta[]> {
    return this.respostaService.findAll(limite, pagina);
  }

  @ApiOperation({ summary: 'Lista todas respostas detalhadamente' })
  @ApiQuery({
    name: 'limite',
    required: true,
    type: Number,
    description: 'Limite de respostas por página',
  })
  @ApiQuery({
    name: 'pagina',
    required: true,
    type: Number,
    description: 'Número da página',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de respostas retornada com sucesso',
    type: [Resposta],
  })
  @Get('/detalhe')
  async findAllWithEntities(
    @Query('limite') limite: number,
    @Query('pagina') pagina: number,
  ): Promise<IResposta[]> {
    return this.respostaService.findAll(limite, pagina, true);
  }

  @ApiOperation({ summary: 'Busca uma resposta detalhadamente pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da resposta', required: true })
  @ApiResponse({
    status: 200,
    description: 'Resposta encontrada com sucesso',
    type: Resposta,
  })
  @Get('/detalhe/:id')
  async findByIdWithEntities(
    @Param('id') id: string,
  ): Promise<IResposta | null> {
    const populateOptions = {
      materias: true,
      turmas: true,
      provas: true,
    };
    return this.respostaService.findById(id, true);
  }

  @ApiOperation({ summary: 'Busca uma resposta pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da resposta', required: true })
  @ApiResponse({
    status: 200,
    description: 'Resposta encontrada com sucesso',
    type: Resposta,
  })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<IResposta | null> {
    return this.respostaService.findById(id);
  }

  @ApiOperation({ summary: 'Atualiza uma resposta pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da resposta', required: true })
  @ApiBody({
    description: 'Dados para atualização',
    type: UpdateRespostaDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Resposta atualizada com sucesso',
    type: Resposta,
  })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRespostaDto: UpdateRespostaDto,
  ): Promise<{ message: string }> {
    await this.respostaService.update(id, updateRespostaDto);
    return { message: 'Resposta atualizada com sucesso' };
  }

  @ApiOperation({ summary: 'Remove uma resposta pelo ID' })
  @ApiParam({ name: 'id', description: 'ID da resposta', required: true })
  @ApiResponse({ status: 200, description: 'Resposta removida com sucesso' })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.respostaService.delete(id);
    return { message: 'Resposta removido com sucesso' };
  }
}
