import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID, ValidateNested } from 'class-validator';

export class CreateCorrecaoDto {
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'ID do aluno relacionado a prova',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  alunoId: string;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'ID da prova relacionada ao aluno',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: true,
  })
  provaId: string;
}
