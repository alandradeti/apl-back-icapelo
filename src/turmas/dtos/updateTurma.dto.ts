import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Professor } from 'src/professores/entities/professor.entity';
import { CreateTurmaDto } from './createTurma.dto';

export class UpdateTurmaDto extends PartialType(CreateTurmaDto) {
  @ApiProperty({
    description: 'Nome da turma',
    example: 'Turma 1',
    required: false,
  })
  nome?: string;

  @ApiProperty({
    description: 'IDs dos Alunos relacionados a turma',
    example: [
      '550e8400-e29b-41d4-a716-446655440000',
      '550e8400-e29b-41d4-a716-446655440000',
    ],
    required: false,
  })
  alunos?: Aluno[];

  @ApiProperty({
    description: 'IDs dos Professores relacionados a turma',
    example: [
      '550e8400-e29b-41d4-a716-446655440000',
      '550e8400-e29b-41d4-a716-446655440000',
    ],
    required: false,
  })
  professores?: Professor[];
}
