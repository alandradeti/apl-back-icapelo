import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMateriaDto } from './createMateria.dto';
import { IPergunta } from 'src/perguntas/entities/interfaces/pergunta.entity.interface';
import { IProfessor } from 'src/professores/entities/interfaces/professor.entity.interface';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';
import { ITurma } from 'src/turmas/entities/interfaces/tuma.entity.interface';

export class UpdateMateriaDto extends PartialType(CreateMateriaDto) {
  @ApiProperty({
    description: 'Nome da matéria (atualização opcional)',
    example: 'Matemática',
    required: false,
  })
  nome?: string;

  @ApiProperty({
    description: 'IDs das perguntas associadas à matéria',
    example: [{ id: 'cb523d0c-67bb-45a3-bf48-dcb99f7d6dc8' }],
    required: false,
  })
  perguntas?: IPergunta[];

  @ApiProperty({
    description: 'IDs dos professores associados à matéria',
    example: [{ id: 'cb523d0c-67bb-45a3-bf48-dcb99f7d6dc7' }],
    required: false,
  })
  professores?: IProfessor[];

  @ApiProperty({
    description: 'IDs das provas associadas à matéria',
    example: [{ id: 'cb523d0c-67bb-45a3-bf48-dcb99f7d6dc0' }],
    required: false,
  })
  provas?: IProva[];

  @ApiProperty({
    description: 'IDs das turmas associadas à matéria',
    example: [{ id: 'cb523d0c-67bb-45a3-bf48-dcb99f7d6dc6' }],
    required: false,
  })
  turmas?: ITurma[];
}
