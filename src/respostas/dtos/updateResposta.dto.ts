import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Prova } from 'src/provas/entities/prova.entity';
import { Pergunta } from 'src/perguntas/entities/pergunta.entity';
import { Alternativa } from 'src/alternativas/entities/alternativa.entity';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateRespostaDto } from './createResposta.dto';

export class UpdateRespostaDto extends PartialType(CreateRespostaDto) {
  @ApiProperty({
    description: 'ID do aluno relacionado a resposta',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  aluno?: Aluno;

  @ApiProperty({
    description: 'ID da prova relacionada a resposta',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  prova?: Prova;

  @ApiProperty({
    description: 'ID da pergunta relacionada a resposta',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  pergunta?: Pergunta;

  @ApiProperty({
    description: 'ID da alternativa relacionada a resposta',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  alternativa?: Alternativa;
}
