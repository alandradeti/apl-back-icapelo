import { TipoUsuario } from 'src/usuarios/enums/usuario.enum';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUsuarioDto } from './createUsuario.dto';
import { IAluno } from 'src/alunos/entities/interfaces/aluno.entity.interface';
import { IProfessor } from 'src/professores/entities/interfaces/professor.entity.interface';

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
    description: 'ID do aluno relacionado ao professor',
    example: {
      id: '550e8400-e29b-41d4-a716-446655440000',
    },
  })
  aluno?: IAluno;

  @ApiProperty({
    description: 'ID do professor relacionado ao aluno',
    example: {
      id: '550e8400-e29b-41d4-a716-446655440001',
    },
  })
  professor?: IProfessor;
}
