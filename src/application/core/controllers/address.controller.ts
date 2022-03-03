/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get, Param } from '@nestjs/common';

import { AddressService } from '../domain/services/address.service';
import { AddressDTO } from '../DTOS/addressDTO';

@Controller('/address')
export class AddressController {
  constructor(private readonly createAddressService: AddressService) {}

  @Post()
  public async create(@Body() body: AddressDTO): Promise<void> {
    return this.createAddressService.createAddress(body);
  }

  @Get()
  public async findAll(): Promise<AddressDTO[]> {
    const address = this.createAddressService.findAll();

    return address;
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<AddressDTO> {
    const result = await this.createAddressService.findAddressById(id);
    if (result) {
      return result;
    } else {
      throw new Error('Not is Address not found!');
    }
  }
}
