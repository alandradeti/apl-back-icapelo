import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { IAlternativa } from 'src/alternativas/entities/interfaces/alternativa.entity.interface';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';

export class CreatePerguntaDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Enunciado da pergunta',
    example: 'Qual é a fórmula da área do círculo?',
  })
  enunciado: string;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'ID da matéria relacionada à pergunta',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  materia: IMateria;

  @IsOptional()
  // @ValidateNested()
  // @Type(() => CreateMateriaDto)
  @ApiProperty({
    description: 'IDs das alternativas relacionadas à pergunta',
    example: [
      {
        id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
        descricao: 'A fórmula da área do círculo é π * r²',
        correta: true,
      },
      {
        id: 'a10e2a53-5a02-406b-aa80-961ba271aeb3',
        descricao: 'A fórmula da área do círculo é 2 * π * r',
        correta: false,
      },
    ],
    required: false,
  })
  alternativas?: IAlternativa[];

  @IsOptional()
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
