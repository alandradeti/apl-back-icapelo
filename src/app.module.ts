import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MateriaModule } from './materias/materia.module';
import { AlternativaModule } from './alternativas/alternativa.module';
import { PerguntaModule } from './perguntas/pergunta.module';
import { DatabaseModule } from './database/database.module';
import { ProfessorModule } from './professores/professor.module';
import { UsuarioModule } from './usuarios/usuario.module';
import { AlunoModule } from './alunos/aluno.module';
import { TurmaModule } from './turmas/turma.module';
import { ProvaModule } from './provas/prova.module';
import { NotaModule } from './notas/nota.module';
import { PeriodoAvaliativoModule } from './periodosAvaliativos/periodoAvaliativo.module';
import { RespostaModule } from './respostas/resposta.module';
import { CorrecaoModule } from './correcoes/correcao.module';
import { MontarProvaModule } from './montarProvas/montarProva.module';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [
    PrometheusModule.register(),
    DatabaseModule,
    MateriaModule,
    PerguntaModule,
    AlternativaModule,
    ProfessorModule,
    UsuarioModule,
    AlunoModule,
    TurmaModule,
    ProvaModule,
    PeriodoAvaliativoModule,
    RespostaModule,
    NotaModule,
    CorrecaoModule,
    MontarProvaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
