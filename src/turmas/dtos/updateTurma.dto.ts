import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTurmaDto } from './createTurma.dto';
import { PeriodoTurma } from '../enums/turma.enum';
import { IAluno } from 'src/alunos/entities/interfaces/aluno.entity.interface';
import { IProfessor } from 'src/professores/entities/interfaces/professor.entity.interface';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';

export class UpdateTurmaDto extends PartialType(CreateTurmaDto) {
  @ApiProperty({
    description: 'Nome da turma',
    example: 'Turma 1',
    required: false,
  })
  nome?: string;

  @ApiProperty({
    description: 'Ano da turma',
    example: '2023',
    required: true,
  })
  ano: string;

  @ApiProperty({
    description: 'Período da turma',
    example: PeriodoTurma.MATUTINO,
    required: true,
  })
  periodo: PeriodoTurma;

  @ApiProperty({
    description: 'IDs das matérias relacionadas a turma',
    example: [
      { id: '550e8400-e29b-41d4-a716-446655440000' },
      { id: '550e8400-e29b-41d4-a716-446655440001' },
    ],
    required: true,
  })
  materias: IMateria[];

  @ApiProperty({
    description: 'IDs dos Alunos relacionados a turma',
    example: [
      { id: '550e8400-e29b-41d4-a716-446655440000' },
      { id: '550e8400-e29b-41d4-a716-446655440001' },
    ],
    required: false,
  })
  alunos?: IAluno[];

  @ApiProperty({
    description: 'IDs dos Professores relacionados a turma',
    example: [
      { id: '550e8400-e29b-41d4-a716-446655440002' },
      { id: '550e8400-e29b-41d4-a716-446655440003' },
    ],
    required: false,
  })
  professores?: IProfessor[];
}
