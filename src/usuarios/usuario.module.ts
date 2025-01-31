import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UsuarioService } from './services/usuario.service';
import { UsuarioRepository } from './repositories/usuario.repository';
import { UsuarioController } from './controllers/usuario.controller';

@Module({
  imports: [DatabaseModule],
  providers: [UsuarioService, UsuarioRepository],
  exports: [UsuarioService],
  controllers: [UsuarioController],
})
export class UsuarioModule {}
