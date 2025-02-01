import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';
import { CreatePeriodoAvaliativoDto } from './createPeriodoAvaliativo.dto';

export class UpdatePeriodoAvaliativoDto extends PartialType(
  CreatePeriodoAvaliativoDto,
) {
  @ApiProperty({
    description: 'Descrição do período avaliativo',
    example: '1º Bimestre',
    required: true,
  })
  descricao: string;

  @ApiProperty({
    description: 'IDs das provas relacionadas ao período avaliativo',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  provas?: IProva[];
}
