const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    email:String,
    memid:String,
    name:{ 
        firstname:String,
        lastname:String 
    },
    Address:{
        country:String,
        state:String,
        city:String
    },
    phone:[String],
    eduStatus:String,
    profilePic:String,
    totCourses:Number,
    courses:[ 
        {
            courseid:[Schema.Types.ObjectId],
            pageid:[Schema.Types.ObjectId],
            intructorName:String,
            progress:Schema.Types.Decimal128,
            scores:Number,
            validity:Date,
            EnrolledDate:Date
        }]

            
},{ collection : 'stutdentDetail' },{timestamps: true})

const Student = mongoose.model("stutdentDetail", studentSchema);
module.exports = Student;