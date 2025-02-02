import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { RespostaModule } from 'src/respostas/resposta.module';
import { CorrecaoService } from './services/correcao.service';
import { CorrecaoController } from './controllers/correcao.controller';
import { NotaModule } from 'src/notas/nota.module';

@Module({
  imports: [DatabaseModule, RespostaModule, NotaModule],
  providers: [CorrecaoService],
  exports: [CorrecaoService],
  controllers: [CorrecaoController],
})
export class CorrecaoModule {}
