import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/users.entity';
import { SignUpParams } from 'src/utils/types';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>,) {

    }

    async signup(userDetails: SignUpParams ) {
        const newUser= this.userRepository.create({ ...userDetails,})
        return this.userRepository.save(newUser);

    }
    async signin() {
        return 'hi';

    }
    async signout() {
        return 'hhhhhhhh';

    }
}