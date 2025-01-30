import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MateriaModule } from './materias/materia.module';
import { AlternativaModule } from './alternativas/alternativa.module';
import { PerguntaModule } from './perguntas/pergunta.module';
import { DatabaseModule } from './database/database.module';
import { ProfessorModule } from './professores/professor.module';
import { UsuarioModule } from './usuarios/usuario.module';

@Module({
  imports: [
    DatabaseModule,
    MateriaModule,
    PerguntaModule,
    AlternativaModule,
    ProfessorModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
