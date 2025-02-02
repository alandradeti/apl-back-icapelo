import { IsOptional, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DatabaseDto {
  static entityName: string;

  @IsOptional()
  @IsUUID()
  @ApiProperty({
    description: `ID (entidade: ${DatabaseDto.entityName})`,
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: false,
  })
  id?: string;
}
