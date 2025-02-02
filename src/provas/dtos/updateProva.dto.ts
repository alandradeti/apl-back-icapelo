import { Professor } from 'src/professores/entities/professor.entity';
import { IPergunta } from 'src/perguntas/entities/interfaces/pergunta.entity.interface';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProvaDto } from './createProva.dto';
import { ProvaStatus } from '../enums/provaStatus.enum';
import { IPeriodoAvaliativo } from 'src/periodosAvaliativos/entities/interfaces/periodoAvaliativo.entity.interface';
import { IAluno } from 'src/alunos/entities/interfaces/aluno.entity.interface';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';

export class UpdateProvaDto extends PartialType(CreateProvaDto) {
  @ApiProperty({
    description: 'Titulo da prova',
    example: 'Prova de Matematica',
    required: false,
  })
  titulo?: string;

  @ApiProperty({
    description: 'Status da prova',
    example: ProvaStatus.ABERTA,
    required: false,
  })
  status?: ProvaStatus;

  @ApiProperty({
    description: 'ID da materia relacionada a prova',
    example: { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' },
    required: false,
  })
  materia?: IMateria;

  @ApiProperty({
    description: 'IDs dos alunos relacionados a prova',
    example: [{ id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' }],
    required: false,
  })
  alunos?: IAluno[];

  @ApiProperty({
    description: 'IDs dos professores realacionados a prova',
    example: [{ id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' }],
    required: false,
  })
  professor?: Professor;

  @ApiProperty({
    description: 'ID do período avaliativo relacionado a prova',
    example: { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' },
    required: true,
  })
  periodoAvaliativo: IPeriodoAvaliativo;

  @ApiProperty({
    description: 'IDs das perguntas relacionados a prova',
    example: [{ id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' }],
    required: false,
  })
  perguntas?: IPergunta[];
}
