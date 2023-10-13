const fs = require('fs');
const url = require('url')
const express = require('express')
const dData = require('./dummy')
// q1 create app
const app =express()

// app.use('/:name',(req,res)=>{
//     res.send(`<h1>Hello ${req.params.name}</h1>`)
// })

// q2 
// fs.open('doc.txt','w',(err,file)=>{
//     console.log(err,file);
// })
// fs.writeFile('.doc.txt','Product List',(err)=>console.log(err));

// q3
// app.use('/endpoint',(req,res)=>{
//     const data = req.query;
//     fs.open('abc.txt','w',(err,file)=>{
//         console.log(err,file);
//     })
//     fs.writeFile('abc.txt',data.name+' '+data.age,(err)=>console.log(err))
//     res.send('ok')
// })

// q4
app.use('/endpoint',(req,res)=>{
    const data = req.query;
    fs.open('abc.txt','a',(err,file)=>{
        console.log(err,file);
        res.send('appended')
    })
    fs.appendFile('abc.txt','\n'+data.name+' '+data.age,(err)=>console.log(err))
})

//endpoint to fetch active products
app.get('/fetchActiveProducts/',(req,res)=>{
    res.send(dData.filter((x)=>x.active))
})

//fetch product by productName
app.get('/fetchByName/:name',(req,res)=>{
    const name= req.params.name.toLowerCase()
    res.send(dData.filter((x)=>x.productName.toLowerCase()===name))
})

//fetch product by id
app.get('/fetchById/:id',(req,res)=>{
    const id = Number(req.params?.id)
    res.send(dData.filter((x)=>x.id === id))
})

//fetch search by name and quantity
app.get('/products/search',(req,res)=>{
    const {name,quantity} = req.query
    const pName = name.toLowerCase()
    const q = Number(quantity)
    res.send(dData.filter((x)=>x.productName.toLowerCase().includes(pName) || x.quantity === q))
})

app.listen(3000);