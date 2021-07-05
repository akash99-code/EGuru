import React from 'react';
//import { useState } from 'react';
import { Link } from 'react-router-dom';
import { isAuth } from '../helpers/auth';
import {useState} from 'react';


 
const  Navbar = () => {

    return (
        <> 
        <nav className="navbar">
              <h1><Link to="/" style={{color:"white"}}>EGURU</Link></h1>
              
           <div>
          {isAuth()==false? <>
          
            <Link to='/Login' style={{fontSize: 150, padding:10, display:'flex', color:'whitesmoke' }} >Login</Link>
          </>:<> 
           </>
          }
        </div>
        </nav>
        
        </>
    );
}
{ /* <h1>Eguru</h1>
    {  isAuth()===false? <>
    <div className="links">
      <Link to='/Login' style={{fontSize: 150, padding:10, display:'flex', color:'whitesmoke' }} >Login</Link>
    </div></>
    <li style={{display: "inline"}}><Link to="/login" class="navigation-link">Log In</Link></li>
     }*/}

 
export default Navbar;