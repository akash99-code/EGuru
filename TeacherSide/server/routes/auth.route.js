const express=require('express');
const Router=express.Router();

//validation
const{validRegister,validLogin,forgotPasswordValidator, resetPasswordValidator}= require('../helpers/valid.js');

//load controllers
const {registerController,activationController,loginController, forgetController, resetController}=require('../controllers/auth.controller.js');




Router.post('/register',validRegister,registerController);
Router.post('/activation',activationController);
Router.post('/login',validLogin,loginController);
Router.put('/password/forgot', forgotPasswordValidator, forgetController);
Router.put('/password/reset', resetPasswordValidator, resetController);



module.exports=Router;