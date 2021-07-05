const User=require('../models/auth.model');
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
    const {token}=req.body;
    console.log(token);
    if(!errors.isEmpty())
    {
        const firstError= errors.array().map(error=>error.msg)[0];
        return res.status(422).json({error:firstError});
    }
    else
    {
        const _id=mongoose.Types.ObjectId(jwt.decode(token)._id);
        console.log(_id);
        User.findOne({_id})
        .exec((error,user)=>{
        if(user)
        {
            var pageId=user.pageId.toString();
            let email=user.email.toString();
            console.log(pageId);
            if(pageId=='')
            {
                console.log('ohh lord help me!!please');
                const page=new Page({email});
                page.save((err,page)=>{
                if(err)
                {    console.log(err);
                    return res.status(400).json({error:errorHandler(err)});
                }
                else
                {
                    user.updateOne({pageId:(page._id).toString()},(err,success)=>{
                        if(err)
                        {
                            console.log(err);
                            return res.status(400).json({error:"Something went wrong"});
                        }
                        else
                        {
                            return res.json({pageDetails:page});
                        }
                    })
                    
                }
                });

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
                        return res.status(402).json({error:'lost your page'});
                    }
                    });
            }
        
        }
        else{
            return res.status(402).json({error:'invalid'});
        }
        });
    }
};


/////////////////////

exports.updatepageController=(req,res)=>{
    
    const errors=validationResult(req);
    const newData=req.body.pagdata;
    const clist=req.body.clist;
    if(!errors.isEmpty())
    {
        const firstError= errors.array().map(error=>error.msg)[0];
        return res.status(422).json({error:firstError});
    }
    else
    {
        console.log(newData);
        delete newData.courses;///
        Page.findByIdAndUpdate(newData._id, newData,
        function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                clist.map(C=>{
                    Course.findByIdAndUpdate(C.id, {cname:C.cname, descript: C.descript},
                        function (err, docs) {
                            if (err){
                                console.log(err)
                            }
                        });
                });
                return res.json({message:"success"})
            }
        });
        
        
    }
};

////////////////////////////

exports.createcourseController=(req,res)=>{
    
    const errors=validationResult(req);
    const {pageId}=req.body;
    console.log(req.body);
    if(!errors.isEmpty())
    {
        const firstError= errors.array().map(error=>error.msg)[0];
        return res.status(422).json({error:firstError});
    }
    else
    {
        console.log(pageId);
        const course=new Course({pageId});
        console.log(course);
        course.save((err,course)=>{
            if(err)
            {    console.log(err);
                 return res.status(400).json({error:errorHandler(err)});
            }
            else
            {
                console.log(course);
                const Cdoc={id: course._id, cname: course.cname, descript: course.descript};
                Page.updateOne({_id:mongoose.Types.ObjectId(pageId)}, {$push:{courses:course._id}})
                .exec((err, page)=>{
                    if(err){
                        return res.status(400).json({err:"something went wrong"});
                    }
                    else{
                        return res.json({Cdoc});
                    }
                });
                /////update page...with page.courses with course id
                
            }
        });
        
    }
};

////////////////////

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
    const {courseId}=req.body;
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
                    return res.json({course});
                }
                else{
                    return res.status(400).json({error:'Course Missing'});

                }
                
            })

    }
};

/////////////////////////////

exports.setCourseDetails=(req,res)=>{
    
    const errors=validationResult(req);
    const {id, update}=req.body;
    console.log(req.body);
    if(!errors.isEmpty())
    {
        const firstError= errors.array().map(error=>error.msg)[0];
        return res.status(422).json({error:firstError});
    }
    else
    {
        console.log(id, update);
        Course.findByIdAndUpdate(id, {roadmap:{sectionName:update.sections, subcontents:update.subsections, contents:update.content}},
            function (err, docs) {
                if (err){
                    console.log(err);
                    return res.status(422).json({error:'Something went wrong'});
                }
                else{
                    return res.json({message:'updated'})
                }
            });
   
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


exports.updateProfile=(req,res)=>{
    
    const errors=validationResult(req);
    const {formData}=req.body;
    if(!errors.isEmpty())
    {
        const firstError= errors.array().map(error=>error.msg)[0];
        return res.status(422).json({error:firstError});
    }
    else
    {
        console.log('help lord', formData);
        Profile.findByIdAndUpdate(formData._id, formData,
        function (err, docs) {
            if (err){
                console.log(err);
                return res.status(400).json({error:errorHandler(err)});

            }
            else{
                return res.json({message:"success"})
            }
        });

    }
};