/* eslint-disable prettier/prettier */
import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../../services/auth/auth.service';

@Controller('/users/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req: any) {
    return await this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('local'))
  @Post('logout')
  async logout(@Req() req: any) {
    return await this.authService.logout(req.user);
  }
}
