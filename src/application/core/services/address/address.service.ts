/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from '../../domain/entity/address/address.entity';
import { AddressDTO } from '../../DTOS/addressDTO';
import { Repository, getConnection } from 'typeorm';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private addressEntityRepository: Repository<AddressEntity>,
  ) {}

  async createAddress(data: AddressDTO): Promise<void> {
    try {
      this.addressEntityRepository.create(data);

      await this.addressEntityRepository.save(data);
    } catch (ex) {
      console.log(ex.message);
      throw new Error(
        `It was not possible create user with address: ${data.city}`,
      );
    }
  }

  async findAll(): Promise<AddressDTO[]> {
    try {
      return await this.addressEntityRepository.find();
    } catch (error) {
      throw new Error(`It was not possible find address`);
    }
  }

  async findOneAddressRelations(): Promise<AddressDTO[]> {
    try {
      return await this.addressEntityRepository.find({
        relations: ['user'],
      });
    } catch (ex) {
      throw new Error(`It was not possible findOneRelations address`);
    }
  }

  async findAddressById(id: string): Promise<AddressDTO> {
    try {
      return await this.addressEntityRepository.findOne(id);
    } catch (error) {
      throw new Error(`It was not possible find address with id: ${id}`);
    }
  }

  async updatedAddress(id: string, data: AddressDTO): Promise<AddressDTO> {
    try {
      const address = await this.addressEntityRepository.findOne(id);

      if (!address) {
        throw new Error(`It was not possible search address with : ${address}`);
      }

      address.uf = data.uf ? data.uf : address.uf;
      address.zip_code = data.zip_code ? data.zip_code : address.zip_code;
      address.city = data.city ? data.city : address.city;
      address.district = data.district ? data.district : address.district;
      address.street = data.street ? data.street : address.street;
      address.number = data.number ? data.number : address.number;
      address.complement = data.complement
        ? data.complement
        : address.complement;
      address.reference = data.reference ? data.reference : address.reference;
      address.long = data.long ? data.long : address.long;
      address.lati = data.lati ? data.lati : address.lati;

      await this.addressEntityRepository.save(address);
      return address;
    } catch (error) {}
  }
}
