import { PartialType } from '@nestjs/mapped-types';
import { CreatePerguntaDto } from './createPergunta.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IAlternativa } from 'src/alternativas/entities/interfaces/alternativa.entity.interface';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';
import { Dificuldade } from '../enums/pergunta.enum';

export class UpdatePerguntaDto extends PartialType(CreatePerguntaDto) {
  @ApiProperty({
    description: 'Enunciado da pergunta',
    example: 'Qual é a fórmula da área do círculo?',
    required: false,
  })
  enunciado?: string;

  @ApiProperty({
    description: 'ID da matéria relacionada à pergunta',
    example: { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' },
    required: false,
  })
  materia?: IMateria;

  @ApiProperty({
    description: 'Dificuldade da pergunta',
    example: Dificuldade.FACIL,
    required: false,
  })
  dificuldade?: Dificuldade;

  @ApiProperty({
    description: 'Alternativas relacionadas à pergunta',
    example: [
      {
        id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
        descricao: 'A fórmula da área do círculo é π * r²',
        correta: true,
      },
    ],
    required: false,
  })
  alternativas?: IAlternativa[];

  @ApiProperty({
    description: 'IDs das provas relacionadas à pergunta',
    example: [{ id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' }],
    required: false,
  })
  provas?: IProva[];
}
