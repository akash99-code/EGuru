import React from 'react';

import { Link } from 'react-router-dom';
import {  signout, isAuth } from '../helpers/auth';
import Footer from './Footer';
import Navig from './Navigator';
import './App.css';


function App() {
  return (
    <>
    
    <Navig/>

    <div class="hero">
      <div class="container">
          <div class="heading">EGURU</div>
          <div class="subheading">HOST YOUR COURSE PAGE INDEPENDENTLY</div>
        <div>
          <Link class="button" role="button" to='/register'>SIGN UP</Link>
          <Link class="hollow-button" role="button" to='/builder'>START DESIGNING</Link>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div style={{marginBottom:"60px"}}>
            <div class="sectionHead">WHAT WE PROVIDE</div>
            <div class="sectionSubHead">THE BEST PLATFORM TO LAUNCH YOUR LMS.</div>
        </div>
        
        <div class="row">
          <div class="white-box">
            <img class="grid-image" src={"https://uploads-ssl.webflow.com/604854e6654ea86f0a51c028/604854e6654ea88ab551c03e_feather2-17-white.svg"} alt="dff"/>
            <div style={{maxWidth:"265px"}}>
            <h3 class="boxHead">CUSTOMIZABLE</h3>
            <p class="para">Customize and design your we with  road maps, videos, materials, flowcharts and quizzes.</p>
            </div>
          </div>
          <div class="white-box">
            <img class="grid-image" src={"https://uploads-ssl.webflow.com/604854e6654ea86f0a51c028/604854e6654ea844f551c066_feather2-22-white.svg"} alt="dff"/>
            <div style={{maxWidth:"265px"}}>
            <h3 class="boxHead">SOCIABILITY</h3>
            <p class="para">Make your website come alive with discussion forums, student's feedback, and comments,</p>
             </div>
          </div>
          <div class="white-box">
          <img class="grid-image" src={"https://uploads-ssl.webflow.com/604854e6654ea86f0a51c028/604854e6654ea8325b51c055_feather-15-white.svg"} alt="dff"/>
          <div style={{maxWidth:"265px"}}>
          <h3 class="boxHead">EASY AND FREE</h3>
          <p class="para">Easy user friendly interface to quick start your e-learning website, with numerous features for free</p>
          </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section" style={{backgroundColor:"#002131", backgroundImage: "linear-gradient(to bottom, hsla(0, 0.00%, 0.00%, 0.70),hsla(0, 0.00%, 0.00%, 0.70))" }}>
      <div class="container">
        <div style={{marginBottom:"60px"}}>
            <div class="sectionHead" style={{color:"whitesmoke"}}>NEED HELP</div>
            <div class="sectionSubHead" style={{color:"whitesmoke"}}>check out our videos to get started.</div>
        </div>
        <div class="row">
          <div class="white-box" style={{border:"none"}}>
          <img class="imagebox" src={"https://uploads-ssl.webflow.com/604854e6654ea86f0a51c028/6048903a0bea7df01694ed9d_luca-bravo-XJXWbfSo2f0-unsplash.jpg"}></img>
          <div style={{maxWidth:"378px", marginBottom:"18px"}}>
            <h3 class="white-text" style={{fontSize:"20px", letterSpacing:"6px"}}>TOOLS GUIDE</h3>
            <p class="para" style={{color:"white"}}>Walk through our various designing tools, settings and understand how to build your lms website with ease, so you can provide  your students the best you want.</p>
           </div> 
            <button class="hollow-button">PLAY</button>
          </div>
          <div class="white-box" style={{border:"none"}}>
            <img class="imagebox" src={"https://uploads-ssl.webflow.com/604854e6654ea86f0a51c028/604893286fa450dfac4641fc_wp3198580-computer-engineering-wallpapers.jpg"}></img>
            <div style={{maxWidth:"378px", marginBottom:"18px"}}>
          <h3 class="white-text">LAUNCH GUIDE</h3>
          <p class="para" style={{color:"white"}}>Know how to configure your website to launch ready.Learn to add and remove members to a course, manage their activities, and extract various reports.</p>
          </div>
          <button class="hollow-button">PLAY</button>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
    <div class="container">
    
        <h2 class="sectionHead">About EGuru</h2>
        <p class="para">EGuru is an open sourse project originally initiated by Narendra and Akash. The platform helps an educator to by-pass any hosting website and establish an independent identity in the current E-Learning opportunity. Quality education must reach every corner of the world at a very optimum price. This can only happen when friuts of the efforts made by online tutors are not eaten up by other web giants. Our moto is to optimize the supply chain of knowledge.</p>
    </div>
    </div>
    <Footer/>
    </>
  );
}


export default App;
/**<Navbar>
    <Nav defaultActiveKey="/" as="ul" className="justify">
      <Nav.Item as="li">
        <Nav.Link href="/" disabled>Home</Nav.Link>
      </Nav.Item>
      { isAuth()===false? <> 
            <Nav.Item as="li">
            <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item><Nav.Item as="li">
            <Nav.Link href="/register">Register</Nav.Link>
            </Nav.Item>
            </>: 
            <>
            <Nav.Item as="li">
            <Nav.Link  href="/profile">{isAuth().name}</Nav.Link>
            </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link  onSelect={signout} href="/login">SignOut</Nav.Link>
        </Nav.Item></>}
      
    </Nav></Navbar>*/