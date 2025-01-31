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
import { ProfessorService } from '../services/professor.service';
import { CreateProfessorDto } from '../dtos/createProfessor.dto';
import { Professor } from '../entities/professor.entity';
import { IProfessor } from '../entities/interfaces/professor.entity.interface';
import { UpdateProfessorDto } from '../dtos/updateProfessor.dto';

@ApiTags('Professor')
@Controller('professor')
export class ProfessorController {
  constructor(private readonly professorService: ProfessorService) {}

  @ApiOperation({ summary: 'Cria um novo professor' })
  @ApiBody({
    description: 'Dados para criação',
    type: CreateProfessorDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Professor criado com sucesso',
    type: Professor,
  })
  @Post()
  async create(
    @Body() createProfessorDto: CreateProfessorDto,
  ): Promise<IProfessor> {
    return this.professorService.create(createProfessorDto);
  }

  @ApiOperation({ summary: 'Lista todos os professores' })
  @ApiQuery({
    name: 'limite',
    required: true,
    type: Number,
    description: 'Limite de professores por página',
  })
  @ApiQuery({
    name: 'pagina',
    required: true,
    type: Number,
    description: 'Número da página',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de professores retornada com sucesso',
    type: [Professor],
  })
  @Get()
  async findAll(
    @Query('limite') limite: number = PAGINATION.DEFAULT_LIMIT,
    @Query('pagina') pagina: number = PAGINATION.DEFAULT_PAGE,
  ): Promise<IProfessor[]> {
    return this.professorService.findAll(limite, pagina);
  }

  @ApiOperation({ summary: 'Lista todos os professores detalhadamente' })
  @ApiQuery({
    name: 'limite',
    required: true,
    type: Number,
    description: 'Limite de professores por página',
  })
  @ApiQuery({
    name: 'pagina',
    required: true,
    type: Number,
    description: 'Número da página',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de professores retornada com sucesso',
    type: [Professor],
  })
  @Get('/detalhe')
  async findAllWithEntities(
    @Query('limite') limite: number,
    @Query('pagina') pagina: number,
  ): Promise<IProfessor[]> {
    return this.professorService.findAll(limite, pagina, true);
  }

  @ApiOperation({ summary: 'Busca um professor detalhadamente pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do professor', required: true })
  @ApiResponse({
    status: 200,
    description: 'Professor encontrado com sucesso',
    type: Professor,
  })
  @Get('/detalhe/:id')
  async findByIdWithEntities(
    @Param('id') id: string,
  ): Promise<IProfessor | null> {
    const populateOptions = {
      materias: true,
      turmas: true,
      provas: true,
    };
    return this.professorService.findById(id, true);
  }

  @ApiOperation({ summary: 'Busca um professor pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do professor', required: true })
  @ApiResponse({
    status: 200,
    description: 'Professor encontrado com sucesso',
    type: Professor,
  })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<IProfessor | null> {
    return this.professorService.findById(id);
  }

  @ApiOperation({ summary: 'Atualiza um professor pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do professor', required: true })
  @ApiBody({
    description: 'Dados para atualização',
    type: UpdateProfessorDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Professor atualizado com sucesso',
    type: Professor,
  })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProfessorDto: UpdateProfessorDto,
  ): Promise<{ message: string }> {
    await this.professorService.update(id, updateProfessorDto);
    return { message: 'Professor atualizada com sucesso' };
  }

  @ApiOperation({ summary: 'Remove um professor pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do professor', required: true })
  @ApiResponse({ status: 200, description: 'Professor removido com sucesso' })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.professorService.delete(id);
    return { message: 'Professor removido com sucesso' };
  }
}
