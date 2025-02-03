import {
  IsInt,
  IsNotEmpty,
  IsUUID,
  IsEnum,
  Min,
  ValidateNested,
  IsArray,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Dificuldade } from 'src/perguntas/enums/pergunta.enum';

export class CreateMontarProvaDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Titulo da prova',
    example: 'Prova de Matematica',
    required: true,
  })
  titulo: string;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'ID da matéria para a prova',
    example: { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284a' },
    required: true,
  })
  materiaId: string;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'ID do professor para a prova',
    example: { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284b' },
    required: true,
  })
  professorId: string;

  @IsNotEmpty()
  @IsUUID('all', { each: true })
  @IsArray()
  @ApiProperty({
    description: 'ID do aluno para a prova',
    example: [{ id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284c' }],
    required: true,
  })
  alunosIds: string[];

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'ID do período avaliativo',
    example: { id: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d' },
    required: true,
  })
  periodoAvaliativoId: string;

  @IsNotEmpty()
  @IsEnum(Dificuldade)
  @ApiProperty({ description: 'Dificuldade das questões', enum: Dificuldade })
  dificuldade: Dificuldade;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @ApiProperty({ description: 'Quantidade de questões', example: 10 })
  quantidade: number;
}
