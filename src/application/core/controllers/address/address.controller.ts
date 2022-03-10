/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get, Param, Patch } from '@nestjs/common';

import { AddressService } from '../../services/address/address.service';
import { AddressDTO } from '../../DTOS/addressDTO';

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

  @Get('/relations')
  public async findOneAddressRelations(): Promise<AddressDTO[]> {
    const address = this.createAddressService.findOneAddressRelations();

    return address;
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<AddressDTO> {
    const address = await this.createAddressService.findAddressById(id);

    if (address) {
      return address;
    } else {
      throw new Error('Not is Address not found!');
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAddressDto: AddressDTO) {
    const address = await this.createAddressService.updatedAddress(
      id,
      updateAddressDto,
    );

    return address;
  }
}
