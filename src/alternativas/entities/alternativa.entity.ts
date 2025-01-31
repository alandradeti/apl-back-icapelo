import { Pergunta } from 'src/perguntas/entities/pergunta.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { IAlternativa } from './interfaces/alternativa.entity.interface';
import { DatabaseEntity } from 'src/database/entities/database.entity';

@Entity({
  name: 'alternativa',
})
export class Alternativa extends DatabaseEntity implements IAlternativa {
  @Column({
    name: 'nome',
    type: 'varchar',
    nullable: false,
  })
  descricao: string;

  @Column({
    name: 'correta',
    type: 'boolean',
    default: false,
  })
  correta: boolean;

  @ManyToOne(() => Pergunta, (pergunta) => pergunta.alternativas, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  pergunta: Pergunta;
}
