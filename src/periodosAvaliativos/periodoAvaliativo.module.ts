import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PeriodoAvaliativoService } from './services/periodoAvaliativo.service';
import { PeriodoAvaliativoRepository } from './repositories/periodoAvaliativo.repository';
import { PeriodoAvaliativoController } from './controllers/periodoAvaliativo.controller';

@Module({
  imports: [DatabaseModule],
  providers: [PeriodoAvaliativoService, PeriodoAvaliativoRepository],
  exports: [PeriodoAvaliativoService],
  controllers: [PeriodoAvaliativoController],
})
export class PeriodoAvaliativoModule {}
