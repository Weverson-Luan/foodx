/* eslint-disable prettier/prettier */
import { ProductService } from '../../services/products/products.service';
import { ProductDTO } from '../../DTOS/productDTO';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('products')
class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  public async create(@Body() body: ProductDTO): Promise<void> {
    return this.productService.createProduct(body);
  }

  @Get()
  public async findProducts(): Promise<ProductDTO[]> {
    const products = this.productService.findProduct();

    return products;
  }
}
export { ProductController };
