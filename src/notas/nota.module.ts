import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { NotaRepository } from './repositories/nota.repository';
import { NotaController } from './controllers/nota.controller';
import { NotaService } from './services/nota.service';
import { RespostaModule } from 'src/respostas/resposta.module';

@Module({
  imports: [DatabaseModule, RespostaModule],
  providers: [NotaService, NotaRepository],
  exports: [NotaService, NotaRepository],
  controllers: [NotaController],
})
export class NotaModule {}
