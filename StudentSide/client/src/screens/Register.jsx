import React, { useState } from 'react';
//import authSvg from '../assests/auth.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { isAuth } from '../helpers/auth';
import {  Redirect } from 'react-router-dom';
import '../App.css';




function Register({history}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: '',
        textChange: 'Sign Up'
      });
      const { name, email, password1, password2, textChange } = formData;

    //handle change from inputs
    const handleChange=text=>e=>{
        setFormData({...formData,[text]:e.target.value});
    }  

    //Submit data to backend
    const handleSubmit=e=>{
        e.preventDefault();
        if( name && email && password1)
        {
            if(password1===password2)
            {
                axios.post(`${process.env.REACT_APP_API_URL}/register`,{name, email, password:password1})
                .then(res=>{
                    setFormData({...formData, name: '', email: '', password1: '', password2: ''});
                    toast.success(res.data.message);
                })
                .catch(err => {
                    setFormData({
                      ...formData,
                      name: '',
                      email: '',
                      password1: '',
                      password2: '',
                      textChange: 'Sign Up'
                    });
                    console.log(err);
                    toast.error(err.response.data.error);
                  });
                
            }
            else
            {
                toast.error('passwords do not match');
            }
        }
        else
        {
            toast.error('please fill all the details');
        }
    }
    return (
        <>
        {isAuth() ? history.back() : null}
        <ToastContainer />
        <div class="section" style={{paddingTop:"70px"}}>
          <div class="container">
          <div class="formBox">
          <div class="sectionHead" style={{marginBottom:"35px", fontSize:"25px"}}>REGISTER</div>
          <div class="formWrapper">
          <form onSubmit={handleSubmit}>
                <input
                    class="form-field"
                    type='text'
                    placeholder='Username'
                    onChange={handleChange('name')}
                    value={name}
                  />
                  <input class="form-field"     
                   type='email'
                    placeholder='Email'
                    onChange={handleChange('email')}
                    value={email}
                  />
                  <input
                    class="form-field"
                    type='password'
                    placeholder='Password'
                    onChange={handleChange('password1')}
                    value={password1}
                  />
                  <input
                    class="form-field"
                    type='password'
                    placeholder='Confirm Password'
                    onChange={handleChange('password2')}
                    value={password2}
                  />
                  <button type='submit' class="button" style={{width:"100%", margin:"0px", marginBottom:"30px"}}><span>{textChange}</span></button>
            </form>
          </div>
          </div>
          </div>
        </div>

        </>
    );
  }
  
  export default Register;

/**
 <div className='min-h-screen m-0 sm:m-20 bg-gray-100 text-gray-900 flex justify-center'>
        {isAuth() ? <Redirect to='/' /> : null}
        <ToastContainer />
        <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
          <div >
            <div className='mt-12 flex flex-col items-center'>
              <h1 className='text-2xl xl:text-3xl'>
                Register
              </h1>
  
              <form
                className='w-full flex-1 mt-8 text-indigo-500'
                onSubmit={handleSubmit}
              >
                <div className='mx-auto max-w-xs relative '>
                  <input
                    className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
                    type='text'
                    placeholder='Name'
                    onChange={handleChange('name')}
                    value={name}
                  />
                  <input
                    className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                    type='email'
                    placeholder='Email'
                    onChange={handleChange('email')}
                    value={email}
                  />
                  <input
                    className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                    type='password'
                    placeholder='Password'
                    onChange={handleChange('password1')}
                    value={password1}
                  />
                  <input
                    className='w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5'
                    type='password'
                    placeholder='Confirm Password'
                    onChange={handleChange('password2')}
                    value={password2}
                  />
                  <button
                    type='submit'
                    className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                  >
                    <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
                    <span className='ml-3'>{textChange}</span>
                  </button>
                </div>
                <div className='flex flex-col items-center'>
                  <a
                    className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3
             bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
                    href='/login'
                    target='_self'
                  >
                    <i className='fas fa-sign-in-alt fa 1x w-6  -ml-2 text-indigo-500' />
                    <span className='ml-4'>Sign In</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
          {/**<div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
            <div
              className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
              style={{ backgroundImage: `url(${authSvg})` }}
            ></div>
            </div>**}
            </div>
            ;
          </div>
 */