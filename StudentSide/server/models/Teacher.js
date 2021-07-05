const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const teacherSchema = new Schema({
    email:String,
        name:{ 
            firstname:String ,
            lastname:String 
        },
        Address:{
            country:String,
            state:String,
            city:String
        },
        phone:[String],
        whatsapp: String,
        socialLinks:[
            {platform:String, url:String}
        ],
        profilePic:String,
        status:String,
        totCourses:Number,
        totMembs:Number,
        experiences:[String],
        achievements:[String],
        skills:[String],
        gitRepo:String
   
},{ collection : 'teacherProfile' },{timestamps: true})

const Teacher = mongoose.model("teacherProfile", teacherSchema);
module.exports = Teacher;
