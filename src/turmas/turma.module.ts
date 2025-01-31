import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TurmaController } from './controllers/turma.controller';
import { TurmaService } from './services/turma.service';
import { TurmaRepository } from './repositories/turma.repository';

@Module({
  imports: [DatabaseModule],
  providers: [TurmaService, TurmaRepository],
  exports: [TurmaService],
  controllers: [TurmaController],
})
export class TurmaModule {}
