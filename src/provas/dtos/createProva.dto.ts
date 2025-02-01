import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Materia } from 'src/materias/entities/materia.entity';
import { Professor } from 'src/professores/entities/professor.entity';
import { IPergunta } from 'src/perguntas/entities/interfaces/pergunta.entity.interface';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ProvaStatus } from '../enums/provaStatus.enum';

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
  @IsUUID()
  @ApiProperty({
    description: 'ID da materia relacionada a prova',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  materia: Materia;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'IDs dos alunos relacionados a prova',
    example: [
      'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
      'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    ],
    required: true,
  })
  alunos: Aluno[];

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'IDs dos professores realacionados a prova',
    example: [
      'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
      'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    ],
    required: true,
  })
  professores: Professor[];

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'IDs das perguntas relacionados a prova',
    example: [
      'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
      'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    ],
    required: true,
  })
  perguntas: IPergunta[];
}
