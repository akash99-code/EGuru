const express=require('express');
const Router=express.Router();

//validation
const {getCourseSettings, addMember}=require('../controllers/access.controller.js');




Router.post('/settings',getCourseSettings);
Router.post('/permit',addMember);
module.exports=Router;