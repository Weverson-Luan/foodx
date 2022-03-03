/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserModule } from './application/core/modules/user.module';
import { UserModel } from './application/core/domain/entity/user.entity';
import { Address } from './application/core/domain/entity/address.entity';

import { UserController } from './application/core/controllers/usertest.controller';
import { UserService } from './application/core/domain/services/user.service';

import { AddressController } from './application/core/controllers/address.controller';
import { AddressService } from './application/core/domain/services/address.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserModel, Address]),
    TypeOrmModule.forRoot(),
  ],
  controllers: [UserController, AddressController],
  providers: [UserService, AddressService],
  exports: [UserService, AddressService],
})
export class AppModule {}
