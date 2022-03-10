/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsEmail, Matches } from 'class-validator';
import { RegexPassword } from 'src/application/validators/regex.password';
export class UserDTO {
  id: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  file: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Matches(RegexPassword.password, {
    message:
      'The password must have uppercase and lowercase letters, numbers and special characters!',
  })
  password: string;

  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  isActive: boolean;
}
