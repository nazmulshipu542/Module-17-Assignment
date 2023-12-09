const express = require('express');

//routing
const router = express.Router();

//userController
const userController = require('../Controller/userController');
router.get = ('/UserGet', userController.UserGet);
router.post = ('/UserPost', userController.UserPost);

//productController
const productController = require('../Controller/productController');
router.get = ('/ProductGet', productController.ProductGet);
router.post = ('/ProductPost', productController.ProductPost);

//cartItemController
const cartItemController = require('../Controller/cartItemController');
router.get = ('/CartItemGet', cartItemController.cartItemGet);
router.post = ('/CartItemPost', cartItemController.cartItemPost);

//orderController
const orderController = require('../Controller/orderController');
router.get = ('/OrderGet', orderController.OrderGet);
router.post = ('/OrderPost', orderController.OrderPost);

//Mongoose
router.post('/InsertsUser', userController.InsertsUser);
router.get('/ReadUser', userController.ReadUser);
router.post('/UpdateUser/:id', userController.UpdateUser);
router.get('DeleteUser/:id', userController.DeleteUser);

router.post('/InsertsProduct', productController.InsertsProduct);
router.get('/ReadProduct', productController.ReadProduct);
router.post('/UpdateProduct/:id', productController.UpdateProduct);
router.get('DeleteProduct/:id', productController.DeleteProduct);

router.post('/InsertsCartItem', cartItemController.InsertsCartItem);
router.get('/ReadCartItem', cartItemController.ReadCartItem);
router.post('/UpdateCartItem/:id', cartItemController.UpdateCartItem);
router.get('DeleteCartItem/:id', cartItemController.DeleteCartItem);

router.post('/InsertsOrder', orderController.InsertsOrder);
router.get('/ReadOrder', orderController.ReadOrder);
router.post('/UpdateOrder/:id', orderController.UpdateOrder);
router.get('DeleteOrder/:id', orderController.DeleteOrder);

module.exports = router;