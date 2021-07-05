const mongoose=require('mongoose');
const { timeStamp } = require('console');

const profileSchema=new mongoose.Schema(
    {
        email:{type:String, required:true, unique:true},
        name:{type:String, default:''},
        country:{type:String, default:''},
        state:{type:String, default:''},
        eduStatus:{type:String, default:''},
        phone: {type:String, default:''},
        whatsapp: {type:String, default:''},
    },
    {
        collection: 'teacherProfile'
    },
    {
        timeStamp:true
    }
);

module.exports=mongoose.model('Profile',profileSchema);
