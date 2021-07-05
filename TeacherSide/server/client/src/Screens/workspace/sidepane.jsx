import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signout } from '../../helpers/auth';

const Sidepane=(props)=>{
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
        <Link href="#about" onClick={()=>{alert('http://localhost:3000/'+props.pageId)}}>Publish</Link>
        <Link href="#services">Statistics</Link>
        <Link href="#clients">Change Domain</Link>
        <Link href="#contact">Update Profile</Link>
        <Link href="#contact" onClick={logout}>Log Out</Link>
        <br />
        <Link href="#contact">Guide</Link>
        <Link href="#contact">Contact Us</Link>
        </div>
        </div>
        </>);
    }
export default Sidepane;