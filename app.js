const express = require('express')
const mongoose = require('mongoose')

const app = express();

const url = 'mongodb://localhost/food'

app.use(express.json())

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

const foodroute = require('./routes/food.js')
app.use('/food',foodroute)

con.on('open',()=>{
    console.log("connected")
})

app.listen(3030,()=>{
    console.log("Server started")
})