import React, { useState, useEffect} from 'react';
//import authSvg from '../assests/auth.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { authenticate, isAuth } from '../helpers/auth';
import {  Redirect, Link } from 'react-router-dom';
import Navig from './Navigator';
import Footer from './Footer';
import './App.css';

const ResetPassword = ({match, history}) =>{

    const [formData, setFormData]=useState({password1:'',password2:'',token:''});
    const {password1,password2,token}=formData;
    useEffect(()=>{
        let token=match.params.token;
        if(token)
        {
            setFormData({...formData,token});
        }

    },[]);

    const handleChange=text=>e=>{
        setFormData({...formData,[text]:e.target.value})
    };

    const handleSubmit=e=>{
        e.preventDefault();
        if((password1===password2) && password1 && password2)
        {
            axios.put(`${process.env.REACT_APP_API_URL}/password/reset`, {newPassword:password1, resetPasswordLink:token})
            .then(res=>{
                setFormData({...formData,password1:'',password2:''});
                toast.success(res.data.message);
                history.push('/login');

            })
            .catch(err=>{
                toast.error(`${err.response.data.error}`);
            })


        }
        else
        {
            toast.error('incorrect passwords');
        }
    };
    if(isAuth()===false)
    {
    return(
      <>
      <ToastContainer />
      <Navig/>
            <div class="section" style={{paddingTop:"70px"}}>
          <div class="container">
          <div class="formBox">
          <div class="sectionHead" style={{marginBottom:"35px", fontSize:"25px"}}>Reset Your Password</div>
          <div class="formWrapper">
          <form onSubmit={handleSubmit}>
                
                  <input class="form-field"     
                   type='password'
                   placeholder='password'
                   onChange={handleChange('password1')}
                   value={password1}
                  />
                  <input
                    class="form-field"
                    type='password'
                    placeholder='Confirm password'
                    onChange={handleChange('password2')}
                    value={password2}
                  />
                  
                  <button type='submit' class="button" style={{width:"100%", margin:"0px", marginBottom:"20px", backgroundColor:"#2e9dff"}}>SUBMIT</button>
            </form>


          </div>
          
          </div>
          </div>
        </div>
            <Footer/>
      </>
    );
  }
  else
  {
      return(<Redirect to='/builder' />);
  }
} 
export default ResetPassword;

/**
 <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
    <ToastContainer />
    <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
      <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
        <div className='mt-12 flex flex-col items-center'>
          <h1 className='text-2xl xl:text-3xl font-extrabold'>
            Reset Your Password
          </h1>
          <div className='w-full flex-1 mt-8 text-indigo-500'>
            
            <form
              className='mx-auto max-w-xs relative '
              onSubmit={handleSubmit}
            >
              <input
                className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                type='password'
                placeholder='password'
                onChange={handleChange('password1')}
                value={password1}
                />
                <input
                className='w-full mt-5 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                type='password'
                placeholder='Confirm password'
                onChange={handleChange('password2')}
                value={password2}
              />
              <button
                type='submit'
                className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
              >
                <i className='fas fa-sign-in-alt  w-6  -ml-2' />
                <span className='ml-3'>Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
      {/**<div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
        <div
          className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
          style={{ backgroundImage: `url(${authSvg})` }}
        ></div>
        </div>***}
        </div>
        </div>**/