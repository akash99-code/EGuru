import React, { useState, useEffect } from 'react';
//import authSvg from '../assests/auth.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { authenticate, isAuth } from '../helpers/auth';
import { Redirect, Link } from 'react-router-dom';
import '../App.css';


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
                    isAuth()? history.replace('/builder'): history.replace('/');
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

        </>
        
    );
}

export default Activate;