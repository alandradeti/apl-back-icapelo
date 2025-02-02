import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Aluno } from 'src/alunos/entities/aluno.entity';
import { IAluno } from 'src/alunos/entities/interfaces/aluno.entity.interface';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';
import { IPeriodoAvaliativo } from 'src/periodosAvaliativos/entities/interfaces/periodoAvaliativo.entity.interface';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';
import { Prova } from 'src/provas/entities/prova.entity';
import { INota } from '../entities/interfaces/nota.entity.interface';

export class CreateNotaDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nota da prova',
    example: 10,
    required: true,
  })
  nota?: number;

  @IsNotEmpty()
  @ApiProperty({
    description: 'ID do aluno relacionado a prova',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  aluno: IAluno;

  @IsNotEmpty()
  @ApiProperty({
    description: 'ID da prova relacionada ao aluno',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  prova: IProva;

  @ApiProperty({
    description: 'ID do período avaliativo relacionado a prova',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  periodoAvaliativo: IPeriodoAvaliativo;

  @ApiProperty({
    description: 'ID da materia relacionada a prova',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  materia: IMateria;
}
