import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { IAlternativa } from 'src/alternativas/entities/interfaces/alternativa.entity.interface';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';
import { Dificuldade } from '../enums/pergunta.enum';
import { AlternativaDto } from 'src/alternativas/dtos/alternativa.dto';
import { Type } from 'class-transformer';
import { MateriaDto } from 'src/materias/dtos/materia.dto';
import { ProvaDto } from 'src/provas/dtos/prova.dto';

export class CreatePerguntaDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Enunciado da pergunta',
    example: 'Qual é a fórmula da área do círculo?',
  })
  enunciado: string;

  @IsNotEmpty()
  @IsEnum(Dificuldade)
  @ApiProperty({
    description: 'Dificuldade da pergunta',
    example: Dificuldade.FACIL,
    required: true,
  })
  dificuldade: Dificuldade;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => MateriaDto)
  @ApiProperty({
    description: 'ID da matéria relacionada à pergunta',
    example: { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' },
    required: true,
  })
  materia: IMateria;

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => AlternativaDto)
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

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ProvaDto)
  @ApiProperty({
    description: 'IDs das provas relacionadas à pergunta',
    example: [{ id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' }],
    required: false,
  })
  provas?: IProva[];
}
