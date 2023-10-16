const express = require(express)
const app = express()

//middleware to check whether request contain authorization key
app.use('/',(req,res,next)=>{
    const error = {
        message:'no authorization found'
    }
    if(!Object.keys(req.headers).includes('authorization')){
        res.status(400).json(error)
    }
})


//middleware to check whether authorization key contain 4 even and 4 odd digits
app.use('/',(req,res,next)=>{
    const error = {
        message:'authorization does not contain 4 even and 4 odd numbers'
    }
    
    if(!Object.keys(req.headers).includes('authorization')){
        res.status(400).json(error)
    }
})

app.listen(3000)