import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatabaseRepository } from 'src/database/repositories/database.repository';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuarioRepository extends DatabaseRepository<Usuario> {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {
    super(usuarioRepository);
  }

  //Métodos personalizados para Usuario
}
