import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5000,
    username: 'postgres',
    password: 'habib123',
    database: 'weblog',
    entities: ["entities/*.ts"],
    synchronize: true,
  };

