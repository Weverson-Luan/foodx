/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from '../../services/users/user.service';
import { UserDTO } from '../../DTOS/userDTO';

@Controller('/users')
export class UserController {
  constructor(private readonly createUserService: UserService) {}

  @Post()
  public async create(@Body() body: UserDTO): Promise<void> {
    return this.createUserService.createUser(body);
  }
  @Get()
  public async findAll(): Promise<UserDTO[]> {
    const address = this.createUserService.findAllUsers();

    return address;
  }

  @Get()
  public async findOneUserRelations(): Promise<UserDTO[]> {
    const address = this.createUserService.findOneUserRelations();

    return address;
  }

  @Get(':id')
  public async findOneUser(@Param('id') id: string): Promise<UserDTO> {
    return this.createUserService.findOneUser(id);
  }

  @Put(':id')
  public async updatedUser(
    @Param() id: string,
    @Body() data: UserDTO,
  ): Promise<UserDTO> {
    return await this.createUserService.updatedUser(id, data);
  }

  @Delete(':id')
  public async DestroyUser(@Param('id') id: string) {
    return this.createUserService.DestroyUser(id);
  }
}
