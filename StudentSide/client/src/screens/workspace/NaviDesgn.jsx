import React from 'react';
import { Link } from 'react-router-dom';
import Ppic from '../../images/profile.png';

import {  signout, isAuth } from '../../helpers/auth';

const NaviDesgn=({save})=>{
    return(
        <>
        <nav class="navbar navbar-expand-sm" style={{paddingBottom:"0px",paddingTop:"0px"}}>
        <div class="container">
        <ul class="mr-auto" style={{marginTop:"-3px"}}> 
              <li style={{display: "inline"}}><Link to="/"  class="Brand">EGURU</Link></li>
              </ul>
  
          <ul class="ml-auto" style={{marginTop:"-3px"}}> 
              <li style={{display: "inline"}}><button class="save-button" style={{fontSize:"13px"}} onClick={save}> SAVE </button></li>
              <li style={{display: "inline"}}><Link to="/profile" class="icon-link"><img style={{height:'29px', paddingTop:'3px'}} src={Ppic} alt='profile'/></Link></li>
          </ul>
        </div>
      </nav></>);
    }
export default NaviDesgn;