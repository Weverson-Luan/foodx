/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../../domain/entity/users/user.entity';
import { UserDTO } from '../../DTOS/userDTO';
import { UserService } from '../../services/users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: UserDTO) {
    const payload = { sub: user.id, email: user.email };

    console.log(await this.userService.updatedUseAuth(user.id, user));
    return {
      token: this.jwtService.sign(payload),
      isLogged: true,
    };
  }

  async logout(user: UserDTO) {
    const payload = { sub: user.id, email: user.email };

    console.log(await this.userService.DestroyAuthUser(user.id, user));
    return {
      token: this.jwtService.sign(payload),
      isLogged: false,
    };
  }

  async validateUser(email: string, password: string) {
    let user: UserEntity;

    try {
      user = await this.userService.findOneOrFail({ email });

      if (password != user.password) {
        return null;
      }
    } catch (error) {
      return null;
    }

    if (!user) return null;

    return user;
  }
}
