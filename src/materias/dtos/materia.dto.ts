import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, ValidateIf } from 'class-validator';
import { DatabaseDto } from 'src/database/dtos/database.dto';

export class MateriaDto extends DatabaseDto {
  static entityName: string = 'materia';

  @ValidateIf((materia) => !materia.id)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome da matéria',
    example: 'Matemática',
    required: true,
  })
  nome: string;
}
