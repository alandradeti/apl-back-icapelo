import { Module } from '@nestjs/common';
import { RelatorioController } from './controllers/relatorio.controller';
import { NotaModule } from 'src/notas/nota.module';

@Module({
  imports: [NotaModule],
  controllers: [RelatorioController],
})
export class RelatorioModule {}
