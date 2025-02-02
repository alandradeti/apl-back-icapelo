import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, Matches } from 'class-validator';
import { PeriodoTurma } from '../enums/turma.enum';
import { IProfessor } from 'src/professores/entities/interfaces/professor.entity.interface';
import { IAluno } from 'src/alunos/entities/interfaces/aluno.entity.interface';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';

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
  @ApiProperty({
    description: 'IDs das matérias relacionadas a turma',
    example: [
      { id: '550e8400-e29b-41d4-a716-446655440000' },
      { id: '550e8400-e29b-41d4-a716-446655440001' },
    ],
    required: true,
  })
  materias: IMateria[];

  @IsNotEmpty()
  @ApiProperty({
    description: 'IDs dos Alunos relacionados a turma',
    example: [
      { id: '550e8400-e29b-41d4-a716-446655440000' },
      { id: '550e8400-e29b-41d4-a716-446655440001' },
    ],
    required: true,
  })
  alunos: IAluno[];

  @IsNotEmpty()
  @ApiProperty({
    description: 'IDs dos Professores relacionados a turma',
    example: [
      { id: '550e8400-e29b-41d4-a716-446655440002' },
      { id: '550e8400-e29b-41d4-a716-446655440003' },
    ],
    required: true,
  })
  professores: IProfessor[];
}
