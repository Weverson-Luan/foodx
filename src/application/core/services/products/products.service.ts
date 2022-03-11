/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductEntity } from '../../domain/entity/poducts/product.entity';
import { ProductDTO } from '../../DTOS/productDTO';

@Injectable()
class ProductService {
  constructor(private readonly productRepository: Repository<ProductEntity>) {}

  async createProduct(data: ProductDTO): Promise<void> {
    try {
      this.productRepository.create(data);

      await this.productRepository.save(data);
    } catch (ex) {
      console.log(ex.message);
      throw new Error(
        `It was not possible create product with name: ${data.name}`,
      );
    }
  }
}

export { ProductService };
