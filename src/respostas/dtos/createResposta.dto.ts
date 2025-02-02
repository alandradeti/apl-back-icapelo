import { IsNotEmpty, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IAlternativa } from 'src/alternativas/entities/interfaces/alternativa.entity.interface';
import { IPergunta } from 'src/perguntas/entities/interfaces/pergunta.entity.interface';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';
import { IAluno } from 'src/alunos/entities/interfaces/aluno.entity.interface';
import { Type } from 'class-transformer';
import { ProvaDto } from 'src/provas/dtos/prova.dto';
import { PerguntaDto } from 'src/perguntas/dtos/pergunta.dto';
import { AlternativaDto } from 'src/alternativas/dtos/alternativa.dto';

export class CreateRespostaDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID do aluno relacionado a resposta',
    example: { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' },
    required: false,
  })
  aluno: IAluno;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ProvaDto)
  @ApiProperty({
    description: 'ID da prova relacionada a resposta',
    example: { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' },
    required: false,
  })
  prova: IProva;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => PerguntaDto)
  @ApiProperty({
    description: 'ID da pergunta relacionada a resposta',
    example: { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' },
    required: false,
  })
  pergunta: IPergunta;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => AlternativaDto)
  @ApiProperty({
    description: 'ID da alternativa relacionada a resposta',
    example: { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' },
    required: false,
  })
  alternativa: IAlternativa;
}
