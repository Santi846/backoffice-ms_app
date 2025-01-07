"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var dotenv = require("dotenv");
require("reflect-metadata");
dotenv.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: (process.env.DB_TYPE || "mysql"), // TypeORM espera un string específico aquí
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
