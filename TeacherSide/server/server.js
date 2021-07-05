const express= require("express");
const cors= require("cors");
const morgan= require("morgan");
const bodyParser= require("body-parser");
const connectDB=require("./config/db");


/**
  (,()=>{
    //console.log(``);
}); 
*/
//instance of server
const app=express();


//Configure .env to ./config/config.env
require("dotenv").config( {path:'./config/config.env'} )


//development configuration
if(process.env.NODE_ENV==='development'){
    app.use(cors( {origin: process.env.CLIENT_URL} ));
    app.use(morgan('dev'));

    //cors - interact with react
    //morgan display request info
}

//opening port
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`app is listening to ${PORT}`);
});

//connecting to db
connectDB();

//using bodyParser
app.use(bodyParser.json());



//loading routes
const authRouter=require('./routes/auth.route');
const builderRouter=require('./routes/builder.route');
const accessRouter=require('./routes/access.route');

//use route
app.use('/api/',authRouter);
app.use('/api/builder',builderRouter);
app.use('/api/access',accessRouter);


//no routes available
app.use((req,res,next)=>{
    res.status(404).json({success:false, message:"page not found"});
})

