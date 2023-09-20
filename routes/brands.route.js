/*/app.get('/brands', brandController.getBrands);
  app.post('/brands', brandController.createBrand);
  app.delete('/brands', brandController.deleteBrands);/*/
  const productController = require('./productController');
  const { Router } = require('express');
  const { brandsController } = require('../controllers/brands.controller');
  
  const router = Router();
  
  router.get('/brands', brandstsController.getBrands);
  router.post('/brands', brandsController.createBrand);
  
  module.exports = router;