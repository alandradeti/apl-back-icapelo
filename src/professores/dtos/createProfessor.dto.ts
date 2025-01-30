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
  @IsUUID()
  @ApiProperty({
    description: 'ID da matéria relacionada à pergunta',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  materias: Materia[];

  @IsOptional()
  @IsUUID()
  @ApiProperty({
    description: 'IDs das turmas relacionadas à pergunta',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  turmas?: Turma[];

  @IsOptional()
  @IsUUID()
  @ApiProperty({
    description: 'IDs das provas relacionadas ao professor',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  provas?: Prova[];
}
