import { TipoUsuario } from 'src/usuarios/enums/usuario.enum';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  ValidateIf,
} from 'class-validator';
import { DatabaseDto } from 'src/database/dtos/database.dto';

export class UsuarioDto extends DatabaseDto {
  static entityName: string = 'usuario';

  @ValidateIf((usuario) => !usuario.id)
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Nome do aluno',
    example: 'João',
    required: true,
  })
  nome: string;

  @ValidateIf((usuario) => !usuario.id)
  @IsNotEmpty()
  @IsEmail({}, { message: 'O e-mail fornecido não é válido.' })
  @ApiProperty({
    description: 'E-mail do aluno',
    example: 'Jx6b5@example.com',
    required: true,
  })
  email: string;

  @ValidateIf((usuario) => !usuario.id)
  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 6,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  @ApiProperty({
    description: 'Senha do aluno',
    example: 'abc123',
    required: true,
  })
  senha: string;

  @ValidateIf((usuario) => !usuario.id)
  @IsNotEmpty()
  @IsEnum(TipoUsuario)
  @ApiProperty({
    description: 'Tipo do aluno',
    example: TipoUsuario.ALUNO,
    required: true,
  })
  tipo: TipoUsuario;
}
