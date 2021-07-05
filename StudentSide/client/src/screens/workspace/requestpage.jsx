import React, { useState, useEffect } from 'react';
//import authSvg from '../assests/auth.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { authenticate, isAuth } from '../../helpers/auth';
import { Redirect, Link } from 'react-router-dom';
import '../../App.css';
import { useParams } from "react-router";


const RequestPage = () => {
    let { pageId, courseId } = useParams();
    const token=isAuth().token;
    console.log(isAuth());
    const user=isAuth().user;
    console.log(user);
    const handleSubmit = e => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/builder/request`, { token,courseId, user })
            .then(res => {
                toast.success("Request sent, You will get confirmation email soon.");  
            })
            .catch(err => {
                toast.error(err.response.data.error);
            })
    };

    return (
        <>
        {isAuth() ? null : <Redirect to='/login' />}
        <ToastContainer />
          <div class="section" style={{paddingTop:"70px"}}>
          <div class="container">
          <div class="formBox">
          <div class="sectionHead" style={{marginBottom:"35px", fontSize:"25px"}}>Welcome {user.name}</div>
          <div class="formWrapper">
          <form onSubmit={handleSubmit}>
                  
                  <button type='submit' class="button" style={{width:"100%", margin:"0px", marginBottom:"20px"}}>Request</button>
            </form>
            <br />
            <div style={{flexGrow:"1", minWidth:"fit-content"}}>
                  <Link to='/register' class="navigation-link">or login with other account</Link>
              </div>

            

          </div>
          
          </div>
          </div>
        </div>

        </>
        
    );
}

export default RequestPage;