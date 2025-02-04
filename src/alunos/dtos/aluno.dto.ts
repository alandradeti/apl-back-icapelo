import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, ValidateIf } from 'class-validator';
import { DatabaseDto } from 'src/database/dtos/database.dto';

export class AlunoDto extends DatabaseDto {
  static entityName: string = 'aluno';

  @ValidateIf((aluno) => !aluno.id)
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Matricula do aluno',
    example: '123456',
    required: true,
  })
  matricula: string;
}
