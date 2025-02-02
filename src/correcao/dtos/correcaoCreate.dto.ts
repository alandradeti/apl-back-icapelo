import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { IAluno } from 'src/alunos/entities/interfaces/aluno.entity.interface';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';
import { IPeriodoAvaliativo } from 'src/periodosAvaliativos/entities/interfaces/periodoAvaliativo.entity.interface';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';

export class CreateCorrecaoDto {
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'ID do aluno relacionado a prova',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  alunoId: string;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'ID da prova relacionada ao aluno',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  provaId: string;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'ID do período avaliativo relacionado a prova',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  periodoAvaliativoId: string;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'ID da materia relacionada a prova',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  materiaId: string;
}
