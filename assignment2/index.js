const express = require('express')
const app = express()
const routes =require('./routes')

//middleware to check whether request contain authorization key
app.use('/',(req,res,next)=>{
    const error = {
        message:'no authorization found'
    }
    if(!Object.keys(req.headers).includes('authorization')){
        res.status(400).json(error)
    }
    else
        next();
})


//middleware to check whether authorization key contain 4 even and 4 odd digits
app.use('/',(req,res,next)=>{
    const error = {
        message:'authorization does not contain 4 even and 4 odd numbers'
    }
    const auth = req.headers.authorization
    const arr =auth.split('')
    if(isNaN(Number(auth))){
        res.status(400).json(error)
    }
    else{
        let even=odd=0;
        arr.forEach(element => element%2 === 0 ? even++ : odd++);
        if(!(even===4 && odd===4)) res.status(400).json(error)
        else next();
    }
})
app.get('/',(req,res)=>{
    res.send('valid request')
})
app.use('/api',routes)

app.listen(3000)