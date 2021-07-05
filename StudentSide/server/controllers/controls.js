const student = require('../models/Student');
const teacher = require('../models/Teacher');
const Course = require('../models/course.model');


exports.courses=(req,res) => {
    Course.find()
     .then(data => { 
      console.log(data);
      res.json(data);
     })
     .catch((err) => {
         console.log(err);
     });
}

exports.profile=(req,res) => {
    student.find()
     .then(data => { 
      console.log(data);
      res.json(data);
     })
     .catch((err) => {
         console.log(err);
     });
}

exports.teachprofile=(req,res) => {
    teacher.find()
     .then(data => { 
      console.log(data);
      res.json(data);
     })
     .catch((err) => {
         console.log(err);
     });
  }


  exports.stuprofileUpdate=(req,res)=>{
    
     const {firstname,lastname,email,country,state,city,eduStatus,phone} = req.body;
      const studen = new student({name:{firstname,lastname},email,Address:{country,state,city},eduStatus,phone});
      studen.save((err,studen)=>{
        if(err)
        {
            const email = studen.email;
            return res.status(401).json({error:errorHandler(err)});
        }
        else
        {
            const {firstname,lastname,email,country,state,city,eduStatus,phone} = studen;
            return res.json({success:true, message:'Sign up success',studen:{name:{firstname,lastname},email,Address:{country,state,city},eduStatus,phone}});
        }
      })
  }