const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { timeStamp } = require('console');

var memdetails=new mongoose.Schema(
    {
        memid:{type:String, default:''},
        name:{type:String, requied:true},
        expire:{type:Date, default: Date.now}
    }
);
var comments=new mongoose.Schema(
    {
        words:{type:String, default:''},
        memid:{type:String, default:''}
    }
);
var coursedetails=new mongoose.Schema(
    {
        sectionName:[String],
        subcontents:[[String]],
        contents:{
            serialno:{type:Number, default:0},
            type:{type:String, default:''},
            link:{type:String, default:''},
            views:{type:Number, default:0},
            likes:{type:Number, default:0},
            feedback:[comments]
        }
    }
    );
const courseSchema=new mongoose.Schema(
    {
            pageId:String,
            cname:{
                type:String,
                trim:true,
                default:''
            },
            descript:{
                type:String,
                trim:true,
                default:''
            },
            category:[String],
            duration:{type:Number, default:0},
            rating:{type:mongoose.Schema.Types.Decimal128, default:0.0},
            members:[memdetails],
            roadmap:[coursedetails]
    },
    {
        collection: 'course'
    },
    {
        timeStamp:true
    }
);

/*const courseSchema = new Schema({
    pageId:[Schema.Types.ObjectId],

            name:{
                type:String,
                trim:true,
                required:true,
                unique:true
            },
            category:[String],
            duration:{
                type:Schema.Types.Decimal128,
                default:"0"
            },
            rating:{
                type:Schema.Types.Decimal128,
                default:"0"
            },
            members:{
                total:Number,
                mems:[
                    {
                        membid:[Schema.Types.ObjectId],
                        name:String,
                        validity:Date,
                    }
                ]
            }
},{ collection : 'course' },{timestamp: true})*/

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
