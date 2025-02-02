import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsString,
  Matches,
  ValidateNested,
} from 'class-validator';
import { PeriodoTurma } from '../enums/turma.enum';
import { IProfessor } from 'src/professores/entities/interfaces/professor.entity.interface';
import { IAluno } from 'src/alunos/entities/interfaces/aluno.entity.interface';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';
import { MateriaDto } from 'src/materias/dtos/materia.dto';
import { Type } from 'class-transformer';
import { AlunoDto } from 'src/alunos/dtos/aluno.dto';
import { ProfessorDto } from 'src/professores/dtos/professor.dto';

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
  @ValidateNested({ each: true })
  @Type(() => MateriaDto)
  @ApiProperty({
    description: 'IDs das matérias relacionadas a turma',
    example: [{ id: '550e8400-e29b-41d4-a716-446655440000' }],
    required: true,
  })
  materias: IMateria[];

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => AlunoDto)
  @ApiProperty({
    description: 'IDs dos Alunos relacionados a turma',
    example: [{ id: '550e8400-e29b-41d4-a716-446655440000' }],
    required: true,
  })
  alunos: IAluno[];

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ProfessorDto)
  @ApiProperty({
    description: 'IDs dos Professores relacionados a turma',
    example: [{ id: '550e8400-e29b-41d4-a716-446655440002' }],
    required: true,
  })
  professores: IProfessor[];
}
