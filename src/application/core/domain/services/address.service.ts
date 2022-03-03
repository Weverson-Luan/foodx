/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from '../entity/address.entity';
import { AddressDTO } from '../../DTOS/addressDTO';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}

  async createAddress(data: AddressDTO): Promise<void> {
    try {
      this.addressRepository.create(data);

      await this.addressRepository.save(data);
    } catch (ex) {
      console.log(ex.message);
      throw new Error(
        `It was not possible create user with address: ${data.city}`,
      );
    }
  }

  async findAll(): Promise<AddressDTO[]> {
    try {
      return await this.addressRepository.find();
    } catch (ex) {
      throw new Error(`It was not possible find users`);
    }
  }

  async findAddressById(id: string): Promise<AddressDTO> {
    try {
      return await this.addressRepository.findOne(id);
    } catch (ex) {
      throw new Error(`It was not possible find user with id: ${id}`);
    }
  }
}
