/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModel } from '../domain/entity/user.entity';
import { UserService } from '../domain/services/user.service';
import { UserDTO } from '../DTOS/userDTO';

@Controller('/person')
export class UserController {
  constructor(private readonly createUserService: UserService) {}

  @Post()
  public async create(@Body() body: UserDTO): Promise<void> {
    return this.createUserService.createUser(body);
  }
}
