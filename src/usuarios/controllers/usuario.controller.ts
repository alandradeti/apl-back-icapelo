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
import { UsuarioService } from '../services/usuario.service';
import { CreateUsuarioDto } from '../dtos/createUsuario.dto';
import { Usuario } from '../entities/usuario.entity';
import { IUsuario } from '../entities/interfaces/usuario.entity.interface';
import { UpdateUsuarioDto } from '../dtos/updateUsuario.dto';

@ApiTags('Usuario')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @ApiOperation({ summary: 'Cria um novo usuário' })
  @ApiBody({
    description: 'Dados para criação',
    type: CreateUsuarioDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Usuario criado com sucesso',
    type: Usuario,
  })
  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<IUsuario> {
    return this.usuarioService.create(createUsuarioDto);
  }

  @ApiOperation({ summary: 'Lista todos os usuários' })
  @ApiQuery({
    name: 'limite',
    required: true,
    type: Number,
    description: 'Limite de usuários por página',
  })
  @ApiQuery({
    name: 'pagina',
    required: true,
    type: Number,
    description: 'Número da página',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuários retornada com sucesso',
    type: [Usuario],
  })
  @Get()
  async findAll(
    @Query('limite') limite: number = PAGINATION.DEFAULT_LIMIT,
    @Query('pagina') pagina: number = PAGINATION.DEFAULT_PAGE,
  ): Promise<IUsuario[]> {
    return this.usuarioService.findAll(limite, pagina);
  }

  @ApiOperation({ summary: 'Lista todos os usuários detalhadamente' })
  @ApiQuery({
    name: 'limite',
    required: true,
    type: Number,
    description: 'Limite de usuários por página',
  })
  @ApiQuery({
    name: 'pagina',
    required: true,
    type: Number,
    description: 'Número da página',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuários retornada com sucesso',
    type: [Usuario],
  })
  @Get('/detalhe')
  async findAllWithEntities(
    @Query('limite') limite: number,
    @Query('pagina') pagina: number,
  ): Promise<IUsuario[]> {
    return this.usuarioService.findAll(limite, pagina, true);
  }

  @ApiOperation({ summary: 'Busca um usuário detalhadamente pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do usuário', required: true })
  @ApiResponse({
    status: 200,
    description: 'Usuário encontrado com sucesso',
    type: Usuario,
  })
  @Get('/detalhe/:id')
  async findByIdWithEntities(
    @Param('id') id: string,
  ): Promise<IUsuario | null> {
    const populateOptions = {
      materias: true,
      turmas: true,
      provas: true,
    };
    return this.usuarioService.findById(id, true);
  }

  @ApiOperation({ summary: 'Busca um usuário pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do usuário', required: true })
  @ApiResponse({
    status: 200,
    description: 'Usuário encontrado com sucesso',
    type: Usuario,
  })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<IUsuario | null> {
    return this.usuarioService.findById(id);
  }

  @ApiOperation({ summary: 'Atualiza um usuário pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do usuário', required: true })
  @ApiBody({
    description: 'Dados para atualização',
    type: UpdateUsuarioDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Usuário atualizado com sucesso',
    type: Usuario,
  })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<{ message: string }> {
    await this.usuarioService.update(id, updateUsuarioDto);
    return { message: 'Usuário atualizada com sucesso' };
  }

  @ApiOperation({ summary: 'Remove um usuário pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do usuário', required: true })
  @ApiResponse({ status: 200, description: 'Usuário removido com sucesso' })
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.usuarioService.delete(id);
    return { message: 'Usuário removido com sucesso' };
  }
}
