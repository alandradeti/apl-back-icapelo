import { TipoUsuario } from 'src/usuarios/enums/usuario.enum';
import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Professor } from 'src/professores/entities/professor.entity';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUsuarioDto } from './createUsuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  @ApiProperty({
    description: 'Nome do aluno',
    example: 'João',
    required: false,
  })
  nome?: string;

  @ApiProperty({
    description: 'E-mail do aluno',
    example: 'Jx6b5@example.com',
    required: false,
  })
  email?: string;

  @ApiProperty({
    description: 'Senha do aluno',
    example: 'abc123',
    required: false,
  })
  senha?: string;

  @ApiProperty({
    description: 'Tipo do aluno',
    example: TipoUsuario.ALUNO,
    required: false,
  })
  tipo?: TipoUsuario;

  @ApiProperty({
    description: 'ID do aluno',
    example: '550e8400-e29b-41d4-a716-446655440000',
    required: false,
  })
  aluno?: Aluno;

  @ApiProperty({
    description: 'ID do professor',
    example: '550e8400-e29b-41d4-a716-446655440000',
    required: false,
  })
  professor?: Professor;
}
