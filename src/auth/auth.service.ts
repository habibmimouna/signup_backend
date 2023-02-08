import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    async signup () {
        return { message : 'signup was succefull'};

    }
    async signin () {
        return  'hi';
        
    }
    async signout () {
        return '';
        
    }
}