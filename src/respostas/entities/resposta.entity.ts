import { Entity, Index, ManyToOne } from 'typeorm';
import { DatabaseEntity } from 'src/database/entities/database.entity';
import { Aluno } from 'src/alunos/entities/aluno.entity';
import { Prova } from 'src/provas/entities/prova.entity';
import { Pergunta } from 'src/perguntas/entities/pergunta.entity';
import { Alternativa } from 'src/alternativas/entities/alternativa.entity';
import { IResposta } from './interfaces/resposta.entity.interface';

@Entity('resposta')
export class Resposta extends DatabaseEntity implements IResposta {
  @ManyToOne(() => Aluno, { nullable: false, onDelete: 'CASCADE' })
  @Index()
  aluno: Aluno;

  @ManyToOne(() => Prova, { nullable: false, onDelete: 'CASCADE' })
  prova: Prova;

  @ManyToOne(() => Pergunta, { nullable: false, onDelete: 'CASCADE' })
  pergunta: Pergunta;

  @ManyToOne(() => Alternativa, { nullable: false, onDelete: 'CASCADE' })
  alternativa: Alternativa;
}
