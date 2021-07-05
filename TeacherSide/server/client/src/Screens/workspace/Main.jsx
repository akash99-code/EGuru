import React, { useState } from 'react';
//import { Link } from 'react-router-dom';

import Course from './Course';

const Main=(props)=>{
  
    const { introTxt,concTxt } = props.formData;
    const handleChange=props.handleChange;
    
  

    return(
        <>
        <div class='mainpage'>
        <textarea class="inpBox" id="introtxt" 
          type="textarea" 
          placeholder="Say Something.." 
          onChange={handleChange('introTxt')} value={introTxt}/>
          <div class="container" style={{maxWidth:'850px', alignItems:'center'}}>
            {props.load && <Course {...props}/>}
          </div>

          <textarea class="inpBox" id='conctxt'
          type="textarea" 
          placeholder="Epilogue" 
          onChange={handleChange('concTxt')} value={concTxt}/>
        </div>
        </>);
    }
export default Main;