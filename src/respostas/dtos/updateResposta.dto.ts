import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRespostaDto } from './createResposta.dto';
import { IAlternativa } from 'src/alternativas/entities/interfaces/alternativa.entity.interface';
import { IPergunta } from 'src/perguntas/entities/interfaces/pergunta.entity.interface';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';
import { IAluno } from 'src/alunos/entities/interfaces/aluno.entity.interface';

export class UpdateRespostaDto extends PartialType(CreateRespostaDto) {
  @ApiProperty({
    description: 'ID do aluno relacionado a resposta',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  aluno?: IAluno;

  @ApiProperty({
    description: 'ID da prova relacionada a resposta',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  prova?: IProva;

  @ApiProperty({
    description: 'ID da pergunta relacionada a resposta',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  pergunta?: IPergunta;

  @ApiProperty({
    description: 'ID da alternativa relacionada a resposta',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  alternativa?: IAlternativa;
}
