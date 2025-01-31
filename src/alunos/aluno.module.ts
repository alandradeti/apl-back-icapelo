import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AlunoService } from './services/aluno.service';
import { AlunoRepository } from './repositories/aluno.repository';
import { AlunoController } from './controllers/aluno.controller';

@Module({
  imports: [DatabaseModule],
  providers: [AlunoService, AlunoRepository],
  exports: [AlunoService],
  controllers: [AlunoController],
})
export class AlunoModule {}
