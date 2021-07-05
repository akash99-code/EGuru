const mongoose=require('mongoose');
const { timeStamp } = require('console');

const pageSchema=new mongoose.Schema(
    {
        email:{type:String, required:true},
        title:{type:String, default:''},
        tag:{type:String, default:''},
        author:{type:String, default:''},
        descript:{type:String, default:''},
        introTxt:{type:String, default:''},
        conclTxt:{type:String, default:''},
        about:{type:String, default:''},
        contacts:[String],
        popularity:{type:mongoose.Schema.Types.Decimal128, default:0.0},
        dateCreated:{ type: Date, default: Date.now },
        categories:[String],
        courses:[mongoose.Schema.Types.ObjectId]
    },
    {
        collection: 'pageDetails'
    },
    {
        timeStamp:true
    }
);

module.exports=mongoose.model('Page',pageSchema);
