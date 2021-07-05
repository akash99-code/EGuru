import React from 'react';
import { Link } from 'react-router-dom';
import Cset from '../../assets/cset.png';

import Home from '../../assets/home2.png';

import {  signout, isAuth } from '../../helpers/auth';

const Stunav=(props)=>{
    return(
        <>
        <nav class="navbar navbar-expand-sm stunav">
        <div class="container">
        <ul class="mr-auto" style={{marginTop:"-3px"}}> 
              <li style={{display: "inline"}}><Link to="#"  class="Brand" style={{color:'white'}}>{props.head}</Link></li>
              </ul>
  
          <ul class="ml-auto" style={{marginTop:"-3px"}}> 
              
          <li style={{display: "inline"}}><Link to={'/builder/courseview/'+props.Cid} class="icon-link"><img style={{height:'25px', paddingTop:'3px'}} src={Cset} alt='courseDetails'/></Link></li>
              <li style={{display: "inline"}}><Link to="/builder" class="icon-link"><img style={{height:'27px', paddingTop:'3px'}} src={Home} alt='homepage'/></Link></li>
          </ul>
        </div>
      </nav></>);
    }
export default Stunav;