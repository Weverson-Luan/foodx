/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from '../entity/user.entity';
import { UserDTO } from '../../DTOS/userDTO';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private usersRepository: Repository<UserModel>,
  ) {}

  async createUser(data: UserDTO): Promise<void> {
    try {
      this.usersRepository.create(data);

      await this.usersRepository.save(data);
    } catch (ex) {
      console.log(ex.message);
      throw new Error(
        `It was not possible create user with e-mail: ${data.email}`,
      );
    }
  }
}
