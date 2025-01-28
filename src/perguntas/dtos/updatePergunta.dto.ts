import { PartialType } from '@nestjs/mapped-types';
import { CreatePerguntaDto } from './createPergunta.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';
import { IAlternativa } from 'src/alternativas/entities/interfaces/alternativa.entity.interface';
import { IProvaPergunta } from 'src/provaPerguntas/entities/interfaces/provaPergunta.entity.interface';

export class UpdatePerguntaDto extends PartialType(CreatePerguntaDto) {
  @ApiProperty({
    description: 'Enunciado da pergunta',
    example: 'Qual é a fórmula da área do círculo?',
  })
  enunciado?: string;

  @ApiProperty({
    description: 'ID da matéria relacionada à pergunta',
    example: {
      id: '69bb2d45-9880-4db7-b600-4ab044d99572',
      nome: 'Matemática',
      descricao: 'A matéria de matemática aborda álgebra e cálculo.',
    },
    required: false,
  })
  materia?: IMateria;

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
    description: 'IDs da relação de provas e perguntas',
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
  provaPerguntas?: IProvaPergunta[];
}
