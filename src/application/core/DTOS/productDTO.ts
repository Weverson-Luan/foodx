/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
export class ProductDTO {
  id?: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  file: string;

  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  delivery_fee: boolean;

  @IsNotEmpty()
  assessment: number;

  @IsNotEmpty()
  user_id: string;
}
