import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';
import { ITurma } from 'src/turmas/entities/interfaces/tuma.entity.interface';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';
import { IUsuario } from 'src/usuarios/entities/interfaces/usuario.entity.interface';
import { UsuarioDto } from 'src/usuarios/dtos/usuario.dto';
import { Type } from 'class-transformer';

export class CreateProfessorDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Matricula do professor',
    example: '12345678',
  })
  matricula: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => UsuarioDto)
  @ApiProperty({
    description: 'ID do usuário relacionado ao professor',
    example: {
      id: '550e8400-e29b-41d4-a716-446655440001',
    },
    required: true,
  })
  usuario: IUsuario;

  @IsOptional()
  @ApiProperty({
    description: 'ID da matéria relacionada à pergunta',
    example: [{ id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' }],
    required: false,
  })
  materias?: IMateria[];

  @IsOptional()
  @ApiProperty({
    description: 'IDs das turmas relacionadas à pergunta',
    example: [{ id: 'af67065b-23c0-4ee4-ac83-79a8dcfe283a' }],
    required: false,
  })
  turmas?: ITurma[];

  @IsOptional()
  @ApiProperty({
    description: 'IDs das provas relacionadas ao professor',
    example: [{ id: 'af67065b-23c0-4ee4-ac83-79a8dcfe283c' }],
    required: false,
  })
  provas?: IProva[];
}
