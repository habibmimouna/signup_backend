import { Body, Controller, Post, Get } from '@nestjs/common';
import { signUpDto } from 'src/dtos/signup.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() signUpDto: signUpDto){
     this.authService.signup(signUpDto);
  }

  @Post('signin')
  signin(){
    console.log('test');
    return this.authService.signin()
  }

  @Get('signout')
  signout(){
    return this.authService.signout()
  }
}
