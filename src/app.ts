import * as express from 'express';
import * as cors from 'cors';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
    type: (process.env.DB_TYPE || "mysql") as any, // TypeORM espera un string específico aquí
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
  .then(() => {
    console.log("Database connected successfully");

    const app = express();

    app.use(
      cors({
        origin: ["http://localhost:3000"],
      })
    );

    app.listen(8000, () => {
      console.log("Server is running on port 8000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });