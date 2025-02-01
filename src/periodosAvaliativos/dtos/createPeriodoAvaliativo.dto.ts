import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';

export class CreatePeriodoAvaliativoDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Descrição do período avaliativo',
    example: '1º Bimestre',
    required: true,
  })
  descricao: string;

  @Optional()
  @ApiProperty({
    description: 'IDs das provas relacionadas ao período avaliativo',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  provas?: IProva[];
}
