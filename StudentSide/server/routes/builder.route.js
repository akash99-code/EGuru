const express=require('express');
const Router=express.Router();

//validation
const {getpageController, getCourseHeads,getCourseDetails,getProfile,requestAccess}=require('../controllers/page.controller.js');




Router.post('/pageinfo',getpageController);
Router.post('/courseheads',getCourseHeads);
Router.post('/courseinfo',getCourseDetails);
Router.post('/getprofile',getProfile);
Router.post('/request',requestAccess);
module.exports=Router;