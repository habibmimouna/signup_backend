import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/users.entity';
import { SignUpParams } from 'src/utils/types';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>,) {

    }
    async valideUser(userDetails: SignUpParams) {
        const user = await this.userRepository.findOne({
            where: { email: userDetails.email }
        });
        console.log('TEST', user);
    }

    async signup(userDetails: SignUpParams) { 
        const newUser = await this.userRepository.save(userDetails);
        console.log(newUser);
           if(newUser){
            return HttpStatus.OK;
          } 
          return HttpStatus.BAD_REQUEST;
    }
    async signin(userDetails: SignUpParams) {
        const user = await this.userRepository.findOne({
            where: { email: userDetails.email }
        });
        console.log('TEST', user);
        return 'hi';
    }
    async signout() {
        return 'hhhhhhhh';

    }
}