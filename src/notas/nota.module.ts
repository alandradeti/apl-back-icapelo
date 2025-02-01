import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { NotaRepository } from './repositories/nota.repository';
import { NotaService } from './services/nota.services';
import { NotaController } from './controllers/nota.controller';

@Module({
  imports: [DatabaseModule],
  providers: [NotaService, NotaRepository],
  exports: [NotaService],
  controllers: [NotaController],
})
export class NotaModule {}
