/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';
import { UserDTO } from '../../DTOS/userDTO';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private repo: Repository<UserEntity>,
  ) {}

  async insert(data: UserDTO): Promise<UserDTO> {
    try {
      this.repo.create(data);
      return await this.repo.save(data);
    } catch (ex) {
      throw new Error(`It was not possible insert address with zip`);
    }
  }
}
