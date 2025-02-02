import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, ValidateIf } from 'class-validator';
import { DatabaseDto } from 'src/database/dtos/database.dto';

export class AlunoDto extends DatabaseDto {
  static entityName: string = 'aluno';
}
