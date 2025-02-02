import { DeepPartial, FindOptionsRelations } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export interface IDatabaseRepository<T> {
  findAll(
    page: number,
    limit: number,
    populateOptions?: FindOptionsRelations<T>,
  ): Promise<T[]>;
  findById(
    id: string,
    populateOptions?: FindOptionsRelations<T>,
  ): Promise<T | null>;
  create(entity: DeepPartial<T>): Promise<T>;
  update(id: string, entity: DeepPartial<T>): Promise<void>;
  delete(id: string): Promise<void>;
}
