// src/routes/product.routes.ts
import { Router } from 'express';
import { AppDataSource } from '../connection';
import { Product } from '../entity/product';

const router = Router();

router.get('/', async (req, res) => {
    const products = await AppDataSource.getRepository(Product).find();
    if (!products) res.status(400).json({message:"No se encontraron productos"});
    res.json(products);
});

export default router;