const express=require('express')
const { getAllProducts, getSingleProduct } = require('../Controller/productController')
const { register, login } = require('../Controller/userController')
const { addToWishlist, getWishlist, removeWishlist } = require('../Controller/wishlistController')
const { middlewareFunction } = require('../Middlewares/jwtMiddleware')
const { addToCart, getCart, removeCart, incrementCount, decrementCount, emptyCart } = require('../Controller/cartController')


// route

const router=new express.Router()

router.get('/get-all-products',getAllProducts)

router.get('/get-single-product/:id',getSingleProduct)

router.post('/add-new-user',register)

router.post('/login',login)

router.post('/user/add-to-wishlist',middlewareFunction,addToWishlist)

router.get('/user/get-wishlist/:userId',middlewareFunction,getWishlist)

router.delete('/user/remove-wishlist/:_id',middlewareFunction,removeWishlist)

router.post('/user/add-to-cart',middlewareFunction,addToCart)

router.get('/user/get-cart',middlewareFunction,getCart)

router.delete('/user/remove-cart/:_id',middlewareFunction,removeCart)

router.get('/user/increment-cart/:_id',middlewareFunction,incrementCount)

router.get('/user/decrement-cart/:_id',middlewareFunction,decrementCount)

router.delete('/user/empty-cart',middlewareFunction,emptyCart)











module.exports=router