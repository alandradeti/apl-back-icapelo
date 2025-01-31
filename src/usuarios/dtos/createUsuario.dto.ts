import { TipoUsuario } from 'src/usuarios/enums/usuario.enum';
import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Professor } from 'src/professores/entities/professor.entity';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  IsUUID,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Nome do aluno',
    example: 'João',
    required: true,
  })
  nome: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'O e-mail fornecido não é válido.' })
  @ApiProperty({
    description: 'E-mail do aluno',
    example: 'Jx6b5@example.com',
    required: true,
  })
  email: string;

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

  @IsNotEmpty()
  @IsEnum(TipoUsuario)
  @ApiProperty({
    description: 'Tipo do aluno',
    example: TipoUsuario.ALUNO,
    required: true,
  })
  tipo: TipoUsuario;

  @IsOptional()
  @IsUUID()
  @ApiProperty({
    description: 'ID do aluno relacionado ao usuário',
    example: '550e8400-e29b-41d4-a716-446655440000',
    required: false,
  })
  aluno?: Aluno;

  @IsOptional()
  @IsUUID()
  @ApiProperty({
    description: 'ID do professor relacionado ao usuário',
    example: '550e8400-e29b-41d4-a716-446655440000',
    required: false,
  })
  professor?: Professor;
}
