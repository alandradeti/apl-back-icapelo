import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Prova } from 'src/provas/entities/prova.entity';
import { Pergunta } from 'src/perguntas/entities/pergunta.entity';
import { Alternativa } from 'src/alternativas/entities/alternativa.entity';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRespostaDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID do aluno relacionado a resposta',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: false,
  })
  aluno: Aluno;

  @IsNotEmpty()
  @ApiProperty({
    description: 'ID da prova relacionada a resposta',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: false,
  })
  prova: Prova;

  @IsNotEmpty()
  @ApiProperty({
    description: 'ID da pergunta relacionada a resposta',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: false,
  })
  pergunta: Pergunta;

  @IsNotEmpty()
  @ApiProperty({
    description: 'ID da alternativa relacionada a resposta',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: false,
  })
  alternativa: Alternativa;
}
