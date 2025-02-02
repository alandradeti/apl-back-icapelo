import { Materia } from 'src/materias/entities/materia.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Turma } from 'src/turmas/entities/turma.entity';
import { Prova } from 'src/provas/entities/prova.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateProfessorDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Matricula do professor',
    example: '12345678',
  })
  matricula: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'ID do usuário relacionado ao professor',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: false,
  })
  usuario: Usuario;

  @IsNotEmpty()
  @ApiProperty({
    description: 'ID da matéria relacionada à pergunta',
    example: [
      { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' },
      { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284a' },
    ],
    required: true,
  })
  materias: Materia[];

  @IsOptional()
  @ApiProperty({
    description: 'IDs das turmas relacionadas à pergunta',
    example: [
      { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe283a' },
      { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284b' },
    ],
    required: true,
  })
  turmas?: Turma[];

  @IsOptional()
  @ApiProperty({
    description: 'IDs das provas relacionadas ao professor',
    example: [
      { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe283c' },
      { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284c' },
    ],
    required: true,
  })
  provas?: Prova[];
}
