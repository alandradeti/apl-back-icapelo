import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Aluno } from 'src/alunos/entities/aluno.entity';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';
import { IPeriodoAvaliativo } from 'src/periodosAvaliativos/entities/interfaces/periodoAvaliativo.entity.interface';
import { Prova } from 'src/provas/entities/prova.entity';
import { CreateNotaDto } from './createNota.dto';

export class UpdateNotaDto extends PartialType(CreateNotaDto) {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nota da prova',
    example: 10,
    required: false,
  })
  nota?: number;

  @IsNotEmpty()
  @ApiProperty({
    description: 'ID do aluno relacionado a prova',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: false,
  })
  aluno?: Aluno;

  @IsNotEmpty()
  @ApiProperty({
    description: 'ID da prova relacionada ao aluno',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: false,
  })
  prova?: Prova;

  @ApiProperty({
    description: 'ID do período avaliativo relacionado a prova',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: false,
  })
  periodoAvaliativo?: IPeriodoAvaliativo;

  @ApiProperty({
    description: 'ID da materia relacionada a prova',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: false,
  })
  materia?: IMateria;
}
