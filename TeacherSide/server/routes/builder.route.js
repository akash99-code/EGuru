const express=require('express');
const Router=express.Router();

//validation
const {getpageController, updatepageController,createcourseController,getCourseHeads,getCourseDetails,setCourseDetails,getProfile,updateProfile}=require('../controllers/page.controller.js');




Router.post('/pageinfo',getpageController);
Router.post('/updatePage',updatepageController);
Router.post('/createCourse',createcourseController);
Router.post('/courseheads',getCourseHeads);
Router.post('/courseinfo',getCourseDetails);
Router.post('/updateCourse',setCourseDetails);
Router.post('/getprofile',getProfile);
Router.post('/updateProfile',updateProfile);
module.exports=Router;