"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/index.ts
var express_1 = require("express");
var productRoutes_1 = require("./entity/productRoutes");
var router = (0, express_1.Router)();
router.use('/products', productRoutes_1.default);
exports.default = router;
