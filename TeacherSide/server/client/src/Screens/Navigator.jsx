import React from 'react';
import { Link, useHistory} from 'react-router-dom';

import {  signout, isAuth } from '../helpers/auth';

const Navig=()=>{
    const history = useHistory();

    const logout=e=>{
        e.preventDefault();
        alert("Logging out..");
        signout();
        history.replace('/');

    }
    return(
        <>
        <nav class="navbar navbar-expand-sm" style={{paddingBottom:"0px",paddingTop:"0px"}}>
        <div class="container">
        <ul class="mr-auto" style={{marginTop:"-3px"}}> 
              <li style={{display: "inline"}}><Link to="/"  class="Brand">EGURU</Link></li>
              </ul>
  
          {isAuth()===false? <>
          <ul class="ml-auto" style={{marginTop:"-3px"}}> 
              <li style={{display: "inline"}}><Link to="/" style={{color: "#2e9dff"}} class="navigation-link">Home</Link></li>
              <li style={{display: "inline"}}><Link to="/login" class="navigation-link">Log In</Link></li>
          </ul></>:<>
          <ul class="ml-auto" style={{marginTop:"-3px"}}> 
          <li style={{display: "inline"}}><Link to="/" style={{color: "#2e9dff"}} class="navigation-link">Home</Link></li>
          <li style={{display: "inline"}}><Link to="#" onClick={logout} class="navigation-link">Log out</Link></li>
      </ul></>
          }
        </div>
      </nav></>);
    }
export default Navig;