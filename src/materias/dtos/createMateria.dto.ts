import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IPergunta } from 'src/perguntas/entities/interfaces/pergunta.entity.interface';
import { IProfessor } from 'src/professores/entities/interfaces/professor.entity.interface';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';
import { ITurma } from 'src/turmas/entities/interfaces/tuma.entity.interface';

export class CreateMateriaDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome da matéria',
    example: 'Matemática',
    required: true,
  })
  nome: string;

  @IsOptional()
  @ApiProperty({
    description: 'IDs das perguntas associadas à matéria',
    example: [{ id: 'cb523d0c-67bb-45a3-bf48-dcb99f7d6dc8' }],
    required: false,
  })
  perguntas?: IPergunta[];

  @IsOptional()
  @ApiProperty({
    description: 'IDs dos professores associados à matéria',
    example: [{ id: 'cb523d0c-67bb-45a3-bf48-dcb99f7d6dc7' }],
    required: false,
  })
  professores?: IProfessor[];

  @IsOptional()
  @ApiProperty({
    description: 'IDs das provas associadas à matéria',
    example: [{ id: 'cb523d0c-67bb-45a3-bf48-dcb99f7d6dc0' }],
    required: false,
  })
  provas?: IProva[];

  @IsOptional()
  @ApiProperty({
    description: 'IDs das turmas associadas à matéria',
    example: [{ id: 'cb523d0c-67bb-45a3-bf48-dcb99f7d6dc6' }],
    required: false,
  })
  turmas?: ITurma[];
}
