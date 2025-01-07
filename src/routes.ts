// src/routes/index.ts
import { Router } from 'express';
import productRoutes from './entity/productRoutes';

const router = Router();
router.use('/products', productRoutes);

export default router;