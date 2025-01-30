import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, IsUUID, Matches } from 'class-validator';
import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Professor } from 'src/professores/entities/professor.entity';
import { PeriodoTurma } from '../enums/turma.enum';

export class CreateTurmaDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Nome da turma',
    example: 'Turma 1',
    required: true,
  })
  nome: string;

  @IsNotEmpty()
  @IsString({})
  @Matches(/^\d{4}$/, { message: 'O ano deve ter exatamente 4 dígitos' })
  @ApiProperty({
    description: 'Ano da turma',
    example: '2023',
    required: true,
  })
  ano: string;

  @IsNotEmpty()
  @IsEnum(PeriodoTurma)
  @ApiProperty({
    description: 'Período da turma',
    example: PeriodoTurma.MATUTINO,
    required: true,
  })
  periodo: PeriodoTurma;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'IDs dos Alunos relacionados a turma',
    example: [
      '550e8400-e29b-41d4-a716-446655440000',
      '550e8400-e29b-41d4-a716-446655440000',
    ],
    required: true,
  })
  alunos: Aluno[];

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'IDs dos Professores relacionados a turma',
    example: [
      '550e8400-e29b-41d4-a716-446655440000',
      '550e8400-e29b-41d4-a716-446655440000',
    ],
    required: true,
  })
  professores: Professor[];
}
