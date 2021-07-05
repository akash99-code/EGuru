import React, { useState, useEffect } from 'react';
//import authSvg from '../assests/auth.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { authenticate, isAuth } from '../helpers/auth';
import { Redirect, Link } from 'react-router-dom';
import Navig from './Navigator';
import Footer from './Footer';
import './App.css';


const Activate = ({ match, history }) => {
    const [formData, setFormData] = useState({ name: '', token: '', show: true });
    
    const { name, token, show } = formData;
    useEffect(() => {
        //get token from params and decode it to extract the name
        let token = match.params.token;
        let {name} = jwt.decode(token);
        console.log(jwt.decode(token))
        if (token) {
            setFormData({ ...formData, name, token });
        }

    }, [match.params]);

    

    const handleSubmit = e => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/activation`, { token })
            .then(res => {
                setFormData({ ...formData, show: false });
                console.log(res.data);
                authenticate(res,()=>{
                    toast.success(res.data.message);
                    isAuth().token? history.replace('/builder'): history.replace('/');
                })
            })
            .catch(err => {
                toast.error(err.response.data.error);
            })
    };

    return (
        <>
        {isAuth() ? <Redirect to='/builder' /> : null}
        <ToastContainer />
        <Navig/>
          <div class="section" style={{paddingTop:"70px"}}>
          <div class="container">
          <div class="formBox">
          <div class="sectionHead" style={{marginBottom:"35px", fontSize:"25px"}}>Welcome {name}</div>
          <div class="formWrapper">
          <form onSubmit={handleSubmit}>
                  
                  <button type='submit' class="button" style={{width:"100%", margin:"0px", marginBottom:"20px"}}>Activate your Account</button>
            </form>
            <div class="para">or register again .</div><br />
            <div style={{flexGrow:"1", minWidth:"fit-content"}}>
                  <Link to='/register' class="link-button">Sign Up</Link>
              </div>

            

          </div>
          
          </div>
          </div>
        </div>
            <Footer/>

        </>
        
    );
}

export default Activate;
/**
 <div className='min-h-screen bg-gray-100 text-gray-900 flex justify-center'>
            {isAuth() ? <Redirect to='/' /> : null}
            <ToastContainer />
            <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
                <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
                    <div className='mt-12 flex flex-col items-center'>
                        <h1 className='text-2xl xl:text-3xl font-extrabold'>
                            Welcome {name}
                        </h1>

                        <form
                            className='w-full flex-1 mt-8 text-indigo-500'
                            onSubmit={handleSubmit}
                        >
                            <div className='mx-auto max-w-xs relative '>
                                <button
                                    type='submit'
                                    className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                                >
                                    <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
                                    <span className='ml-3'>Activate your Account</span>
                                </button>
                            </div>
                            <div className='my-12 border-b text-center'>
                                <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
                                    Or sign up again
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <a
                                    className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3 
           bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
                                    href='/register'
                                    target='_self'
                                >
                                    <i className='fas fa-sign-in-alt fa 1x w-6  -ml-2 text-indigo-500' />
                                    <span className='ml-4'>Sign Up</span>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
                    {/**<div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
                   <div className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat' style={{ backgroundImage: `url(${authSvg})` }}></div>
                  </div>***}
                  </div>

                  </div>*/