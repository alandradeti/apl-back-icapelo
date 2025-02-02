import { IPergunta } from 'src/perguntas/entities/interfaces/pergunta.entity.interface';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ProvaStatus } from '../enums/provaStatus.enum';
import { IPeriodoAvaliativo } from 'src/periodosAvaliativos/entities/interfaces/periodoAvaliativo.entity.interface';
import { IMateria } from 'src/materias/entities/interfaces/materia.entity.interface';
import { IAluno } from 'src/alunos/entities/interfaces/aluno.entity.interface';
import { IProfessor } from 'src/professores/entities/interfaces/professor.entity.interface';
import { Type } from 'class-transformer';
import { PeriodoAvaliativoDto } from 'src/periodosAvaliativos/dtos/periodoAvaliativo.dto';
import { PerguntaDto } from 'src/perguntas/dtos/pergunta.dto';
import { ProfessorDto } from 'src/professores/dtos/professor.dto';
import { AlunoDto } from 'src/alunos/dtos/aluno.dto';
import { MateriaDto } from 'src/materias/dtos/materia.dto';

export class CreateProvaDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Titulo da prova',
    example: 'Prova de Matematica',
    required: true,
  })
  titulo: string;

  @IsNotEmpty()
  @IsEnum(ProvaStatus)
  @ApiProperty({
    description: 'Status da prova',
    example: ProvaStatus.ABERTA,
    required: true,
  })
  status: ProvaStatus;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => MateriaDto)
  @ApiProperty({
    description: 'ID da materia relacionada a prova',
    example: { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' },
    required: true,
  })
  materia: IMateria;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AlunoDto)
  @ApiProperty({
    description: 'IDs dos alunos relacionados a prova',
    example: [{ id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' }],
    required: true,
  })
  alunos: IAluno[];

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ProfessorDto)
  @ApiProperty({
    description: 'IDs dos professores realacionados a prova',
    example: { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' },
    required: true,
  })
  professor: IProfessor;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => PeriodoAvaliativoDto)
  @ApiProperty({
    description: 'ID do período avaliativo relacionado a prova',
    example: { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' },
    required: true,
  })
  periodoAvaliativo: IPeriodoAvaliativo;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PerguntaDto)
  @ApiProperty({
    description: 'IDs das perguntas relacionados a prova',
    example: [{ id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' }],
    required: true,
  })
  perguntas: IPergunta[];
}
