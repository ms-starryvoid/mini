const express = require('express')
const colors= require('colors')
const morgan = require('morgan')
const dotenv= require('dotenv');
const connectdb = require('./config/db');
const cors = require('cors');

//rest obj
const app = express()
// Enable CORS
app.use(cors());
//dotenv cofiguration
dotenv.config();
//mongodb connection
connectdb();


const asha = require('./models/ashaModel')

//dataasha()

//middleware

app.use(express.json())
app.use(morgan('dev'))


//routes

/*app.get("/",(req,res) => {
    res.status(200).send({
        message:"server running",  
    });

});*/

app.use('/api/v1/user',require('./routes/userRoute'))
app.use('/api/v1/user',require('./routes/userRoute'))

app.use('/api/v1/user',require('./routes/adminRoute'))
app.use('/api/v1/user',require('./routes/adminRoute'))
app.use('/api/v1/user',require('./routes/adminRoute'))
app.use('/api/v1/user',require('./routes/profileRoute'))
app.use('/api/v1/user',require('./routes/userRoute'))
app.use('/api/v1/user',require('./routes/patientRoute'))
//listen
const port= process.env.PORT
app.listen(port,() =>{
    console.log(`SERver running in port ${process.env.PORT} `.bgCyan.white );

});