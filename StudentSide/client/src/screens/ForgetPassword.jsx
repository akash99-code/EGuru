import React, { useState } from 'react';
//import authSvg from '../assests/forget.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import {  Redirect } from 'react-router-dom';
import {  isAuth } from '../helpers/auth';
import '../App.css';


const ForgetPassword = ({ history }) => {
    const [formData, setFormData] = useState({ email: '', textChange: 'Submit' });
    const { email, textChange } = formData;

    const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (email) {
            axios.put(`${process.env.REACT_APP_API_URL}/password/forgot`, { email })
                .then(res => {
                    setFormData({ ...formData, email: '' });
                    toast.success(`Please check your email`);
                })
                .catch(err => {
                    console.log(err.response);
                    toast.error(err.response.data.error);
                });
        } else {
            toast.error('Please provide your email');
        }
    };
    if(isAuth()===false)
    {
    return (
        <>
        <ToastContainer />
          <div class="section" style={{paddingTop:"780px", paddingBlock:"780px"}}>
          <div class="container">
          <div class="formBox">
          <div class="sectionHead" style={{marginBottom:"155px", fontSize:"95px"}}>Forgot Password</div>
          <div class="formWrapper">
          <form onSubmit={handleSubmit}>      
                  <input class="form-field"     
                   type='email'
                    placeholder='Email'
                    onChange={handleChange('email')}
                    value={email}
                  />
                  
                  <button type='submit' class="but" style={{width:"70%", margin:"0px", marginBottom:"20px"}}>{textChange}</button>
            </form>

            

          </div>
          
          </div>
          </div>
        </div>

        </>
        
    );
    }
    else
    {
      return(<Redirect to='/builder' />);
    }
};

export default ForgetPassword;