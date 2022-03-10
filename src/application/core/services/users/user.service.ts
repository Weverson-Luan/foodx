/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../domain/entity/users/user.entity';
import { UserDTO } from '../../DTOS/userDTO';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import console from 'console';

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

  async findOneOrFail(
    conditions: FindConditions<UserEntity>,
    options?: FindOneOptions<UserEntity>,
  ) {
    try {
      return this.usersRepository.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findAllUsers(): Promise<UserDTO[]> {
    try {
      return await this.usersRepository.find({
        select: [
          'id',
          'name',
          'username',
          'email',
          'file',
          'isActive',
          'phone',
        ],
        order: {
          created_at: 'DESC',
        },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findOneUserRelations(): Promise<UserDTO[]> {
    try {
      return await this.usersRepository.find({
        relations: ['user'],
      });
    } catch (error) {
      throw new NotFoundException(error.message);
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
      throw new NotFoundException(error.message);
    }
  }

  async updatedUser(id: string, data: UserDTO): Promise<UserEntity> {
    const user = await this.usersRepository.findOne(id);

    if (!user) {
      throw new Error('Error is Updated !');
    }
    this.usersRepository.merge(user, data);
    return await this.usersRepository.save(user);
  }

  async updatedUseAuth(id: string, data: UserDTO): Promise<UserEntity> {
    const user = await this.usersRepository.findOne(id);

    if (!user) {
      throw new Error('Error is Updated !');
    }

    user.isActive = data.isActive = true
      ? (data.isActive = true)
      : user.isActive;

    return await this.usersRepository.save(user);
  }

  async DestroyAuthUser(id: string, data: UserDTO): Promise<UserEntity> {
    const user = await this.usersRepository.findOne(id);

    if (!user) {
      throw new Error('Error is Updated !');
    }

    user.isActive = data.isActive = false
      ? (data.isActive = false)
      : (user.isActive = false);

    return await this.usersRepository.save(user);
  }

  async DestroyUser(id: string): Promise<void> {
    const user = await this.usersRepository.delete(id);
    console.log('destroy', user);

    return null;
  }
}
