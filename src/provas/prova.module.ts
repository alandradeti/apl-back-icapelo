import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ProvaService } from './services/prova.service';
import { ProvaRepository } from './repositories/prova.repository';
import { ProvaController } from './controllers/prova.controller';

@Module({
  imports: [DatabaseModule],
  providers: [ProvaService, ProvaRepository],
  exports: [ProvaService, ProvaRepository],
  controllers: [ProvaController],
})
export class ProvaModule {}
