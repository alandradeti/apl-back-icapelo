import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ProvaModule } from 'src/provas/prova.module';
import { MontarProvaService } from './services/montarProva.service';
import { MontarProvaController } from './controllers/montarProva.controller';
import { MontarProvaRepository } from './repositories/montarProva.repository';

@Module({
  imports: [DatabaseModule, ProvaModule],
  providers: [MontarProvaService, MontarProvaRepository],
  exports: [MontarProvaService],
  controllers: [MontarProvaController],
})
export class MontarProvaModule {}
