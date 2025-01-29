import { PartialType } from '@nestjs/mapped-types';
import { CreatePerguntaDto } from './createPergunta.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IAlternativa } from 'src/alternativas/entities/interfaces/alternativa.entity.interface';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';
import { IsUUID } from 'class-validator';

export class UpdatePerguntaDto extends PartialType(CreatePerguntaDto) {
  @ApiProperty({
    description: 'Enunciado da pergunta',
    example: 'Qual é a fórmula da área do círculo?',
  })
  enunciado?: string;

  @IsUUID()
  @ApiProperty({
    description: 'ID da matéria relacionada à pergunta',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  materia?: string;

  @ApiProperty({
    description: 'IDs das alternativas relacionadas à pergunta',
    example: [
      {
        id: '829eb3e7-6494-45fd-8fa6-dea893bd0fc6',
        descricao: 'A fórmula da área do círculo é π * r²',
        correta: true,
      },
      {
        id: 'd593bbf9-0277-432d-b1ef-e95d7ca76925',
        descricao: 'A fórmula da área do círculo é 2 * π * r',
        correta: false,
      },
    ],
    required: false,
  })
  alternativas?: IAlternativa[];

  @ApiProperty({
    description: 'IDs das provas',
    example: [
      {
        id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
      },
      {
        id: 'a10e2a53-5a02-406b-aa80-961ba271aeb3',
      },
    ],
    required: false,
  })
  provas?: IProva[];
}
