import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';
import { ITurma } from 'src/turmas/entities/interfaces/tuma.entity.interface';
import { UsuarioDto } from 'src/usuarios/dtos/usuario.dto';
import { IUsuario } from 'src/usuarios/entities/interfaces/usuario.entity.interface';

export class CreateAlunoDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Matricula do aluno',
    example: '123456',
    required: true,
  })
  matricula: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => UsuarioDto)
  @ApiProperty({
    description: 'ID do usuário relacionado ao professor',
    example: {
      id: '550e8400-e29b-41d4-a716-446655440002',
    },
    required: true,
  })
  usuario: IUsuario;

  @IsOptional()
  @ApiProperty({
    description: 'IDs das turmas relacionadas ao aluno',
    example: [{ id: '550e8400-e29b-41d4-a716-446655440000' }],
    required: false,
  })
  turmas: ITurma[];

  @IsOptional()
  @ApiProperty({
    description: 'IDs das provas relacionadas ao aluno',
    example: [{ id: '550e8400-e29b-41d4-a716-446655440002' }],
    required: false,
  })
  provas?: IProva[];
}
