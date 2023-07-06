import express from 'express';
import adminController from '../controller/admin';

const router = express.Router();

router.get('/api/admin/product', adminController.postAddProduct);

module.exports = router;
