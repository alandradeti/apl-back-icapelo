import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { RespostaRepository } from './repositories/resposta.repository';
import { RespostaService } from './services/resposta.service';
import { RespostaController } from './controllers/resposta.controller';

@Module({
  imports: [DatabaseModule],
  providers: [RespostaService, RespostaRepository],
  exports: [RespostaService, RespostaRepository],
  controllers: [RespostaController],
})
export class RespostaModule {}
