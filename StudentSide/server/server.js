const express = require('express');
const mongoose = require('mongoose');
//const { countReset } = require('node:console');
const bodyParser = require("body-parser");
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db')
const app = express()



//config .env to ./config/config.env
require('dotenv').config({
    path:'./config/config.env'
})



//development configuration
if(process.env.NODE_ENV==='development'){
    app.use(cors( {origin: process.env.CLIENT_URL} ));
    app.use(morgan('dev'));
}

const PORT = process.env.PORT;


//connect to database
connectDB()

  app.use(bodyParser.json())

  app.listen(PORT, () =>{
      console.log(`APP listening on port ${PORT}`);
  });

  //loading routes
const authRouter=require('./routes/auth.route');
const pageRouter=require('./routes/rout');
const builderRouter=require('./routes/builder.route');

//use route
app.use('/api/',authRouter);
app.use('/api/rout',pageRouter);

app.use('/api/builder',builderRouter);

//no routes available
app.use((req,res,next)=>{
    res.status(404).json({success:false, message:"page not found"});
})