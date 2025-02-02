import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsBoolean, ValidateIf } from 'class-validator';
import { DatabaseDto } from 'src/database/dtos/database.dto';

export class AlternativaDto extends DatabaseDto {
  static entityName: string = 'alternativa';

  @ValidateIf((alternativa) => !alternativa.id)
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Descrição da alternativa',
    example: 'A fórmula da área do círculo é π * r²',
  })
  descricao: string;

  @ValidateIf((alternativa) => !alternativa.id)
  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty({
    description: 'Indica se a alternativa é a correta',
    example: true,
  })
  correta: boolean;
}
