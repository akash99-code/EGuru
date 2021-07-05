import React from 'react';
import { Link } from 'react-router-dom';
import Cset from '../../images/cset.png';
import { useHistory } from "react-router-dom";
import Home from '../../images/home2.png';

import {  signout, isAuth } from '../../helpers/auth';

const Stunav=(props)=>{
  let history = useHistory();
    return(
        <>
        <nav class="navbar navbar-expand-sm stunav">
        <div class="container">
        <ul class="mr-auto" style={{marginTop:"-3px"}}> 
              <li style={{display: "inline"}}><Link to="#"  class="Brand" style={{color:'white'}}>{props.head}</Link></li>
              </ul>
  
          <ul class="ml-auto" style={{marginTop:"-3px"}}> 
              
          <li style={{display: "inline"}}><Link to="/profile" class="icon-link"><img style={{height:'25px', paddingTop:'3px'}} src={Cset} alt='courseDetails'/></Link></li>
              <li style={{display: "inline"}}><Link to={'/'+props.pid}  class="icon-link"><img style={{height:'27px', paddingTop:'3px'}} src={Home} alt='homepage'/></Link></li>
          </ul>
        </div>
      </nav></>);
    }
export default Stunav;