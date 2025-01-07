import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import "reflect-metadata";

dotenv.config();

export const AppDataSource = new DataSource({
    type: (process.env.DB_TYPE || "mysql") as any, // TypeORM espera un string específico aquí
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306", 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ["src/entity/product.js"], // Cambia según tu estructura
    synchronize: true,
    //logs
    logging: false,
  });

