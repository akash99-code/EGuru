import React, { useState, useEffect} from 'react';
//import authSvg from '../assests/auth.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { authenticate, isAuth } from '../helpers/auth';
import {  Redirect, Link } from 'react-router-dom';
import '../App.css';

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

      </>
    );
  }
  else
  {
      return(<Redirect to='/builder' />);
  }
} 
export default ResetPassword;