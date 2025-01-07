import * as express from 'express';
import * as cors from 'cors';

import routes from './routes';
import { AppDataSource } from './connection';

// Inicializar conexión y servidor Express
export const initialitationApp = AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");

    const app = express();

    app.use(
      cors({
        origin: ["http://localhost:3000"],
      }),
      
    );

    app.use('/api/', routes);

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });