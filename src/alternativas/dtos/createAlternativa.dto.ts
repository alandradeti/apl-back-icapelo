import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsUUID,
} from 'class-validator';
import { IPergunta } from 'src/perguntas/entities/interfaces/pergunta.entity.interface';

export class CreateAlternativaDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Descrição da alternativa',
    example: 'A fórmula da área do círculo é π * r²',
  })
  descricao: string;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty({
    description: 'Indica se a alternativa é a correta',
    example: true,
  })
  correta: boolean;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'Pergunta relacionada à alternativa (ID da pergunta)',
    example: '550e8400-e29b-41d4-a716-446655440000',
    required: true,
  })
  pergunta: IPergunta;
}
