import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signout } from '../../helpers/auth';

const Sidepane=()=>{
    const history = useHistory();

    const logout=e=>{
        e.preventDefault();
        alert("Logging out..");
        signout();
        history.replace('/');

    }
    return(
        <>
        <div  class="sidenavContainer">
        <div class="sidenav">
        <Link href="#services">Statistics</Link>
        <Link href="#contact">Profile</Link>
        <Link to="/register" >Sign Up</Link>
        <Link to="/login" >Log In</Link>
        <br />
        <Link href="#contact">Guide</Link>
        <Link href="#contact">Contact Us</Link>
        </div>
        </div>
        </>);
    }
export default Sidepane;