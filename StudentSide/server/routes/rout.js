const express = require('express');
const Router=express.Router();

//load controllers
const {courses,profile,teachprofile,stuprofileUpdate} = require('../controllers/controls');


Router.get('/Courses',courses);
Router.get('/Profile',profile);
Router.get('/TeacherProfile',teachprofile);
Router.post('/stu',stuprofileUpdate)

module.exports=Router;