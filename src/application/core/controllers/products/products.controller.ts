/* eslint-disable prettier/prettier */
import { ProductService } from '../../services/products/products.service';
import { ProductDTO } from '../../DTOS/productDTO';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('products')
class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  public async create(@Body() body: ProductDTO): Promise<void> {
    return this.productService.createProduct(body);
  }
}
export { ProductController };
