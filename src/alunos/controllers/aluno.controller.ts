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
import { AlunoService } from '../services/aluno.service';
import { CreateAlunoDto } from '../dtos/createAluno.dto';
import { Aluno } from '../entities/aluno.entity';
import { IAluno } from '../entities/interfaces/aluno.entity.interface';
import { UpdateAlunoDto } from '../dtos/updateAluno.dto';

@ApiTags('Aluno')
@Controller('aluno')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @ApiOperation({ summary: 'Cria um novo aluno' })
  @ApiBody({
    description: 'Dados para criação',
    type: CreateAlunoDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Aluno criado com sucesso',
    type: Aluno,
  })
  @Post()
  async create(@Body() createAlunoDto: CreateAlunoDto): Promise<IAluno> {
    return this.alunoService.create(createAlunoDto);
  }

  @ApiOperation({ summary: 'Lista todos os alunos' })
  @ApiQuery({
    name: 'limite',
    required: true,
    type: Number,
    description: 'Limite de alunos por página',
  })
  @ApiQuery({
    name: 'pagina',
    required: true,
    type: Number,
    description: 'Número da página',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de alunos retornada com sucesso',
    type: [Aluno],
  })
  @Get()
  async findAll(
    @Query('limite') limite: number = PAGINATION.DEFAULT_LIMIT,
    @Query('pagina') pagina: number = PAGINATION.DEFAULT_PAGE,
  ): Promise<IAluno[]> {
    return this.alunoService.findAll(limite, pagina);
  }

  @ApiOperation({ summary: 'Lista todos os alunos detalhadamente' })
  @ApiQuery({
    name: 'limite',
    required: true,
    type: Number,
    description: 'Limite de alunos por página',
  })
  @ApiQuery({
    name: 'pagina',
    required: true,
    type: Number,
    description: 'Número da página',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de alunos retornada com sucesso',
    type: [Aluno],
  })
  @Get('/detalhe')
  async findAllWithEntities(
    @Query('limite') limite: number,
    @Query('pagina') pagina: number,
  ): Promise<IAluno[]> {
    return this.alunoService.findAll(limite, pagina, true);
  }

  @ApiOperation({ summary: 'Busca um aluno detalhadamente pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do aluno', required: true })
  @ApiResponse({
    status: 200,
    description: 'Aluno encontrado com sucesso',
    type: Aluno,
  })
  @Get('/detalhe/:id')
  async findByIdWithEntities(@Param('id') id: string): Promise<IAluno | null> {
    const populateOptions = {
      materias: true,
      turmas: true,
      provas: true,
    };
    return this.alunoService.findById(id, true);
  }

  @ApiOperation({ summary: 'Busca um aluno pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do aluno', required: true })
  @ApiResponse({
    status: 200,
    description: 'Aluno encontrado com sucesso',
    type: Aluno,
  })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<IAluno | null> {
    return this.alunoService.findById(id);
  }

  @ApiOperation({ summary: 'Atualiza um aluno pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do aluno', required: true })
  @ApiBody({
    description: 'Dados para atualização',
    type: UpdateAlunoDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Aluno atualizado com sucesso',
    type: Aluno,
  })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAlunoDto: UpdateAlunoDto,
  ): Promise<{ message: string }> {
    await this.alunoService.update(id, updateAlunoDto);
    return { message: 'Aluno atualizada com sucesso' };
  }

  @ApiOperation({ summary: 'Remove um aluno pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do aluno', required: true })
  @ApiResponse({ status: 200, description: 'Aluno removido com sucesso' })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.alunoService.delete(id);
    return { message: 'Aluno removido com sucesso' };
  }
}
