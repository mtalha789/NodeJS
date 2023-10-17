const express=require('express')
const router = express.Router()

router.get('/products',(req,res)=>{
    res.send('get products')
})
router.post('/products',(req,res)=>{
    res.send('add products')
})
router.put('/products',(req,res)=>{
    res.send('update products')
})
router.delete('/products',(req,res)=>{
    res.send('delete products')
})
router.get('/orders',(req,res)=>{
    res.send('get orders')
})
router.post('/orders',(req,res)=>{
    res.send('add orders')
})
router.put('/orders',(req,res)=>{
    res.send('update orders')
})
router.delete('/orders',(req,res)=>{
    res.send('delete orders')
})
router.get('/customers',(req,res)=>{
    res.send('get customers')
})
router.post('/customers',(req,res)=>{
    res.send('add customers')
})
router.put('/customers',(req,res)=>{
    res.send('update customers')
})
router.delete('/customers',(req,res)=>{
    res.send('delete customers')
})
module.exports=router;