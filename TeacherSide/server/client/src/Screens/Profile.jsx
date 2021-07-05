import React, { useState } from 'react';
//import authSvg from '../assests/auth.svg';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { isAuth } from '../helpers/auth';
import {  Redirect } from 'react-router-dom';
import Navig from './Navigator';
import Footer from './Footer';
import useFetch from '../useFetch';
import './App.css';




function Profile({history}) {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        country:'',
        state:'',
        eduStatus:'',
        phone: '',
        whatsapp: '',

      });
      const [update, ifupd]= useState(false);
      const [load, setload]=useState(false);
      const { name, email, country, state,eduStatus, phone, whatsapp } = formData;
      const user=isAuth().user;
      console.log(isAuth().user.email);
      const { data, error} = useFetch('/builder/getprofile',{email:user.email});
  
    if(data && !load)
    {
      setFormData(data.profile);
      setload(true);
    }

    //handle change from inputs
    const handleChange=text=>e=>{
        setFormData({...formData,[text]:e.target.value});
        ifupd(true);
    }  

    //Submit data to backend
    const handleSubmit=e=>{
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/builder/updateProfile`, {formData})
      .then(res => {
        console.log(res.data);
        alert('profile updated');
      })
      .catch(err => {
         alert('oops eror occured!');
          console.log(err.message);
        }
      );
        ifupd(false);
    }
    return (
        <>
        {isAuth() ? null: <Redirect to='/login' /> }
        <Navig/>
        <div class="section" style={{paddingTop:"70px"}}>
          <div class="container">
          <div class="formBox">
          <div class="sectionHead" style={{marginBottom:"35px", fontSize:"25px"}}>PROFILE</div>
          <div class="formWrapper" style={{width:'100%'}}>
          <form onSubmit={handleSubmit}>
          <table class="ctable" style={{fontSize:'18px', width:'100%', margin:'auto', textAlign:'right'}}>
              <tr><td>Name</td><td><input
                    class="link-input"
                    type='text'
                    onChange={handleChange('name')}
                    value={name}
                  /></td></tr>
              <tr><td>Email</td><td><input
                    class="link-input"
                    type='text'
                    value={email}
                  /></td></tr>
              <tr><td>Country</td><td><input
                    class="link-input"
                    type='text'
                    onChange={handleChange('country')}
                    value={country}
                  /></td></tr>
              <tr><td>State</td><td><input
                    class="link-input"
                    type='text'
                    onChange={handleChange('state')}
                    value={state}
                  /></td></tr>
              <tr><td>Phone</td><td><input
                    class="link-input"
                    type='text'
                    onChange={handleChange('phone')}
                    value={phone}
                  /></td></tr>
              <tr><td>Whatsapp</td><td><input
                    class="link-input"
                    type='text'
                    onChange={handleChange('whatsapp')}
                    value={whatsapp}
                  /></td></tr>
            </table>
                  {update && <button type='submit' class="button" style={{width:"100%", margin:"0px", marginBottom:"30px"}}><span>UPDATE</span></button>}
            </form>
          </div>
          </div>
          </div>
        </div>
        <Footer/>

        </>
    );
  }
  
  export default Profile;

