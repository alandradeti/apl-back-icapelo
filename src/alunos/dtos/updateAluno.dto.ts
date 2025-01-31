import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IProva } from 'src/provas/entities/interfaces/prova.entity.interface';
import { ITurma } from 'src/turmas/entities/interfaces/tuma.entity.interface';
import { IUsuario } from 'src/usuarios/entities/interfaces/usuario.entity.interface';
import { CreateAlunoDto } from './createAluno.dto';

export class UpdateAlunoDto extends PartialType(CreateAlunoDto) {
  @ApiProperty({
    description: 'Matricula do aluno',
    example: '123456',
    required: false,
  })
  matricula?: string;

  @ApiProperty({
    description: 'ID do usuário relacionado ao aluno',
    example: '550e8400-e29b-41d4-a716-446655440000',
    required: false,
  })
  usuario?: IUsuario;

  @ApiProperty({
    description: 'IDs das turmas relacionadas ao aluno',
    example: [
      '550e8400-e29b-41d4-a716-446655440000',
      '550e8400-e29b-41d4-a716-446655440000',
    ],
    required: false,
  })
  turmas?: ITurma[];

  @ApiProperty({
    description: 'IDs das provas relacionadas ao aluno',
    example: [
      '550e8400-e29b-41d4-a716-446655440000',
      '550e8400-e29b-41d4-a716-446655440000',
    ],
    required: false,
  })
  provas?: IProva[];
}
