import { Body, Controller, Post, Get } from '@nestjs/common';
import { signUpDto } from 'src/dtos/signup.dto';
import { SignUpParams } from 'src/utils/types';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signup')
  signup(@Body() signUpDto: signUpDto) {
    this.authService.signup(signUpDto);
  }

  @Post('signin')
  signin(@Body()  params:SignUpParams) {
    return this.authService.signin(params)
  }

  @Get('signout')
  signout() {
    return this.authService.signout()
  }
}
