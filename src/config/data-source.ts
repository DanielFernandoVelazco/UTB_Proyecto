import { DataSourceOptions } from "typeorm";
import * as dotenv from "dotenv";
import { registerAs } from "@nestjs/config";

dotenv.config({
    path: '.env.development',
});

const postgresDataSource: DataSourceOptions = {

    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*{.ts,.js}'],
};

export const postgresDataSourceConfig = registerAs('postgres', () => postgresDataSource)