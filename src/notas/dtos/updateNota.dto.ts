import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateNotaDto } from './createNota.dto';
import { IAluno } from 'src/alunos/entities/interfaces/aluno.entity.interface';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';

export class UpdateNotaDto extends PartialType(CreateNotaDto) {
  @ApiProperty({
    description: 'Nota da prova',
    example: 10.0,
    required: false,
  })
  nota?: number;

  @ApiProperty({
    description: 'ID do aluno relacionado a prova',
    example: { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' },
    required: false,
  })
  aluno?: IAluno;

  @ApiProperty({
    description: 'ID da prova relacionada ao aluno',
    example: { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' },
    required: false,
  })
  prova?: IProva;
}
