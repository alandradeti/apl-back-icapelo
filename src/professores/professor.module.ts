import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ProfessorController } from './controllers/professor.controller';
import { ProfessorService } from './services/professor.service';
import { ProfessorRepository } from './repositories/professor.repository';

@Module({
  imports: [DatabaseModule],
  providers: [ProfessorService, ProfessorRepository],
  exports: [ProfessorService],
  controllers: [ProfessorController],
})
export class ProfessorModule {}
