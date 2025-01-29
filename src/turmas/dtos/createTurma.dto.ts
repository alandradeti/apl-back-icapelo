import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Professor } from 'src/professores/entities/professor.entity';

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
