import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "../entities/users.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5000,
    username: 'postgres',
    password: 'habib123',
    database: 'postgres',
    entities: [ User],
    synchronize: true,
  };

