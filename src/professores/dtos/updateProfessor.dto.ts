import { Materia } from 'src/materias/entities/materia.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Turma } from 'src/turmas/entities/turma.entity';
import { Prova } from 'src/provas/entities/prova.entity';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProfessorDto } from './createProfessor.dto';

export class UpdateProfessorDto extends PartialType(CreateProfessorDto) {
  @ApiProperty({
    description: 'Matricula do professor',
    example: '12345678',
    required: false,
  })
  matricula?: string;

  @ApiProperty({
    description: 'ID do usuário relacionado ao professor',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: false,
  })
  usuario?: Usuario;

  @ApiProperty({
    description: 'ID da matéria relacionada à pergunta',
    example: 'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    required: false,
  })
  materias?: Materia[];

  @ApiProperty({
    description: 'IDs das turmas relacionadas à pergunta',
    example: [
      'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
      'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    ],
    required: false,
  })
  turmas?: Turma[];

  @ApiProperty({
    description: 'IDs das provas relacionadas ao professor',
    example: [
      'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
      'af67065b-23c0-4ee4-ac83-79a8dcfe284d',
    ],
    required: false,
  })
  provas?: Prova[];
}
