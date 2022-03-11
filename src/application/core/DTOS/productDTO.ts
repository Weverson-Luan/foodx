/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsEmail, Matches } from 'class-validator';
export class ProductDTO {
  id: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  file: string;

  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  price: string;

  @IsNotEmpty()
  delivery_fee: boolean;

  @IsNotEmpty()
  assessment: string;

  @IsNotEmpty()
  user_id: string;
}
