"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var typeorm_1 = require("typeorm");
var dotenv = require("dotenv");
dotenv.config();
var AppDataSource = new typeorm_1.DataSource({
    type: (process.env.DB_TYPE || "mysql"), // TypeORM espera un string específico aquí
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306", 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ["src/entity/*.js"], // Cambia según tu estructura
    synchronize: true,
    logging: true,
});
// Inicializar conexión y servidor Express
AppDataSource.initialize()
    .then(function () {
    console.log("Database connected successfully");
    var app = express();
    app.use(cors({
        origin: ["http://localhost:3000"],
    }));
    app.listen(8000, function () {
        console.log("Server is running on port 8000");
    });
})
    .catch(function (error) {
    console.error("Error connecting to the database", error);
});
