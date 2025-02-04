import { TipoUsuario } from 'src/usuarios/enums/usuario.enum';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { IProfessor } from 'src/professores/entities/interfaces/professor.entity.interface';
import { IAluno } from 'src/alunos/entities/interfaces/aluno.entity.interface';
import { AlunoDto } from 'src/alunos/dtos/aluno.dto';
import { Type } from 'class-transformer';
import { ProfessorDto } from 'src/professores/dtos/professor.dto';

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
  @ValidateNested({ each: true })
  @Type(() => AlunoDto)
  @ApiProperty({
    description: 'ID do aluno relacionado ao professor',
    example: {
      id: '550e8400-e29b-41d4-a716-446655440000',
      matricula: '123456',
    },
  })
  aluno?: IAluno;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => ProfessorDto)
  @ApiProperty({
    description: 'ID do professor relacionado ao aluno',
    example: {
      id: '550e8400-e29b-41d4-a716-446655440001',
      matricula: '123456',
    },
  })
  professor?: IProfessor;
}
