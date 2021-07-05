const User=require('../models/auth.models');
const Page=require('../models/page.model');
const Course=require('../models/course.model');
const Profile=require('../models/profile.model');
const mongoose=require('mongoose');
const expressJwt=require('express-jwt');
const _=require('lodash');
const {OAuth2Client}=require('google-auth-library');
const fetch= require('node-fetch');
const {validationResult}= require('express-validator');
const jwt= require('jsonwebtoken');
const {errorHandler}=require('../helpers/dbErrorHandling');            //custom error handler..
const  sgMail= require('@sendgrid/mail');
const { lte } = require('lodash');
var async = require("async");
sgMail.setApiKey(process.env.MAIL_KEY);

exports.getpageController=(req,res)=>{
    
    const errors=validationResult(req);
    const {pageId}=req.body;
    if(!errors.isEmpty())
    {
        const firstError= errors.array().map(error=>error.msg)[0];
        return res.status(422).json({error:firstError});
    }
    else
    {
        
            console.log(pageId);
            if(pageId=='')
            {
                
            }
            else{
                const _id=mongoose.Types.ObjectId(pageId);
                Page.findOne({_id})
                    .exec((error,page)=>{
                    if(page)
                    {
                        return res.json({pageDetails:page});
                    }
                    else{
                        return res.status(400).json({error:'page not found'});
                    }
                    });
            }
        
    }
};


/////////////////////


exports.getCourseHeads=(req,res)=>{
    
    const errors=validationResult(req);
    const {list}=req.body;
    if(!errors.isEmpty())
    {
        const firstError= errors.array().map(error=>error.msg)[0];
        return res.status(422).json({error:firstError});
    }
    else
    {
        console.log('help lord');
        var head = new Array();
        const L=list.length-1;
        console.log(L)
        list.map((_id, index)=>{
            Course.findOne({_id:mongoose.Types.ObjectId(_id)})
                    .exec((error,course)=>{
                    if(course)
                    {
                        console.log("ohh lord, help please");
                        head.push({id:course._id, cname: course.cname, descript: course.descript});
                       if(index===L)
                       {
                        return res.json({cheads:head});
                       }
                    }
                    
                })
                    
        })
    }
};

/////////////////
exports.getCourseDetails=(req,res)=>{
    
    const errors=validationResult(req);
    const {courseId, token}=req.body;
    if(!errors.isEmpty())
    {
        const firstError= errors.array().map(error=>error.msg)[0];
        return res.status(422).json({error:firstError});
    }
    else
    {
        console.log('help lord', courseId);
        Course.findOne({_id:mongoose.Types.ObjectId(courseId)})
                .exec((error,course)=>{
                if(course)
                {

                    console.log("ohh lord, help please");
                    if(token)
                    {
                    const studentId=jwt.decode(token)._id;
                    const L=course.members.length-1;
                    course.members.map((M, i)=>{
                        if(M.memid===studentId){
                            return res.json({course});
                        }
                        else if(i==L)
                        {
                            course.roadmap.contents=[]; 
                            return res.json({course});
                        }
                    });
                    
                    }
                    else{
                        course.roadmap.contents=[]; 
                        return res.json({course});
                    }
                    
                }
                else{
                    return res.status(400).json({error:'Course Missing'});

                }
                
            })

    }
};



/////////////////////////////////////

exports.getProfile=(req,res)=>{
    
    const errors=validationResult(req);
    const {email}=req.body;
    if(!errors.isEmpty())
    {
        const firstError= errors.array().map(error=>error.msg)[0];
        return res.status(422).json({error:firstError});
    }
    else
    {
        console.log('help lord', email);
        Profile.findOne({email})
                .exec((error,profile)=>{
                if(profile)
                {
                    return res.json({profile});
                }
                else{
                    const profile=new Profile({email});
                    profile.save((err,profile)=>{
                    if(err)
                    {   
                        console.log(err);
                        return res.status(400).json({error:errorHandler(err)});
                    }
                    else{
                        return res.json({profile});
                    }
                    
                    });

                }
                
            })

    }
};
///////////////////////////////////////
exports.requestAccess=(req,res)=>{
    
    const errors=validationResult(req);
    const { token,courseId, user }=req.body;
    if(!errors.isEmpty())
    {
        const firstError= errors.array().map(error=>error.msg)[0];
        return res.status(422).json({error:firstError});
    }
    else
    {
        console.log('help lord', token,courseId);
        const _id=mongoose.Types.ObjectId(jwt.decode(token)._id);
        Course.updateOne({_id:mongoose.Types.ObjectId(courseId)}, {$push:{memRequest:{memid:_id, mname:user.name}}})
                .exec((err, page)=>{
                    if(err){
                        return res.status(400).json({err:"something went wrong"});
                    }
                    else{
                        return res.json({message:'request sent'});
                    }
                
            })

    }
};
