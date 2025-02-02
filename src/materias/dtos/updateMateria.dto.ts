import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMateriaDto } from './createMateria.dto';
import { IPergunta } from 'src/perguntas/entities/interfaces/pergunta.entity.interface';
import { IProfessor } from 'src/professores/entities/interfaces/professor.entity.interface';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';
import { INota } from 'src/notas/entities/interfaces/nota.entity.interface';
import { ITurma } from 'src/turmas/entities/interfaces/tuma.entity.interface';

export class UpdateMateriaDto extends PartialType(CreateMateriaDto) {
  @ApiProperty({
    description: 'Nome da matéria (atualização opcional)',
    example: 'Matemática',
    required: false,
  })
  nome?: string;

  @ApiProperty({
    description: 'Notas associadas à matéria',
    example: [
      {
        id: 'cb523d0c-67bb-45a3-bf48-dcb99f7d6dc8',
      },
    ],
    required: false,
  })
  notas?: INota[];

  @ApiProperty({
    description: 'Perguntas associadas à matéria (atualização opcional)',
    example: [
      {
        id: '0444d7f2-e5fa-4817-b7a2-8be7813a3cb9',
      },
      {
        id: 'b8613686-9cad-4b67-9d31-c32de262a6f9',
      },
    ],
    required: false,
  })
  perguntas?: IPergunta[];

  @ApiProperty({
    description: 'Professores associados à matéria',
    example: [
      {
        id: 'cb523d0c-67bb-45a3-bf48-dcb99f7d6dc8',
      },
    ],
    required: false,
  })
  professores?: IProfessor[];

  @ApiProperty({
    description: 'Provas associadas à matéria',
    example: [
      {
        id: 'cb523d0c-67bb-45a3-bf48-dcb99f7d6dc8',
      },
    ],
    required: false,
  })
  provas?: IProva[];

  @ApiProperty({
    description: 'IDs das turmas associadas à matéria',
    example: [
      {
        id: 'cb523d0c-67bb-45a3-bf48-dcb99f7d6dc8',
      },
    ],
    required: false,
  })
  turmas?: ITurma[];
}
