import { DatabaseEntity } from 'src/database/entities/database.entity';
import { Prova } from 'src/provas/entities/prova.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { IPeriodoAvaliativo } from './interfaces/periodoAvaliativo.entity.interface';

@Entity('periodoAvaliativo')
export class PeriodoAvaliativo
  extends DatabaseEntity
  implements IPeriodoAvaliativo
{
  @Column({ name: 'descricao', type: 'varchar', nullable: false })
  descricao: string;

  @OneToMany(() => Prova, (prova) => prova.periodoAvaliativo)
  provas?: Prova[];
}
