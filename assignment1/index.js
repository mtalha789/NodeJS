const fs = require('fs');
const url = require('url')
const express = require('express')
// q1 create app
const app =express()

// q2 
fs.open('doc.txt','w',(err,file)=>{
    console.log(err,file);
})
fs.writeFile('.doc.txt','Product List',(err)=>console.log(err));