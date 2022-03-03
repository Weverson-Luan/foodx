/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entity/user.entity';
import { UserDTO } from '../../DTOS/userDTO';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
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

  async findAllUsers(): Promise<UserDTO[]> {
    try {
      return await this.usersRepository.find();
    } catch (error) {
      throw new Error(`It was not possible find users`);
    }
  }

  async findOneUserRelations(): Promise<UserDTO[]> {
    try {
      return await this.usersRepository.find({
        relations: ['user'],
      });
    } catch (error) {
      throw new Error(`It was not possible find relations users`);
    }
  }

  async findOneUser(id: string): Promise<UserDTO> {
    try {
      const addressOne = this.usersRepository.findOne(id);

      if (!addressOne) {
        throw new Error(
          'We did not find any registered users in the database.',
        );
      }

      return addressOne;
    } catch (error) {
      throw new Error(
        'Internal server error in fetching registered users in the database',
      );
    }
  }
}
