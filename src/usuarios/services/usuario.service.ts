import { Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioRepository } from '../repositories/usuario.repository';
import { UpdateUsuarioDto } from '../dtos/updateUsuario.dto';
import { CreateUsuarioDto } from '../dtos/createUsuario.dto';
import { IUsuario } from '../entities/interfaces/usuario.entity.interface';

@Injectable()
export class UsuarioService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  async findAll(limit: number, page: number): Promise<IUsuario[]> {
    return await this.usuarioRepository.findAll(limit, page);
  }

  async findById(id: string, relation: boolean = false): Promise<IUsuario> {
    const usuario = await this.usuarioRepository.findById(id);
    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado!');
    }

    return usuario;
  }

  async create(usuario: CreateUsuarioDto): Promise<IUsuario> {
    return await this.usuarioRepository.create(usuario);
  }

  async update(id: string, usuario: UpdateUsuarioDto): Promise<void> {
    await this.usuarioRepository.update(id, usuario);
  }

  async delete(id: string): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
