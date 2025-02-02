import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, ValidateNested } from 'class-validator';
import { IAluno } from 'src/alunos/entities/interfaces/aluno.entity.interface';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';
import { Type } from 'class-transformer';
import { AlunoDto } from 'src/alunos/dtos/aluno.dto';
import { ProvaDto } from 'src/provas/dtos/prova.dto';

export class CreateNotaDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nota da prova',
    example: 10.0,
    required: true,
  })
  nota?: number;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => AlunoDto)
  @ApiProperty({
    description: 'ID do aluno relacionado a prova',
    example: { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' },
    required: true,
  })
  aluno: IAluno;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ProvaDto)
  @ApiProperty({
    description: 'ID da prova relacionada ao aluno',
    example: { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' },
    required: true,
  })
  prova: IProva;
}
