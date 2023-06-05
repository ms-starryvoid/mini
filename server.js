const express = require('express')
const colors= require('colors')
const moragon = require('morgan')
const dotenv= require('dotenv')

//dotenv cofiguration
dotenv.config();
//rest obj
const app = express()

//middleware

app.use(express.json())
app.use(moragon('dev'))


//routes

app.get("/",(req,res) => {
    res.status(200).send({
        message:"server running",  
    });

});

//listen
const port= process.env.PORT
app.listen(port,() =>{
    console.log(`SERver running in port ${process.env.PORT} `.bgCyan.white );

});