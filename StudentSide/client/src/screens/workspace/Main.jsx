import React, { useState } from 'react';
//import { Link } from 'react-router-dom';

import Course from './Course';

const Main=(props)=>{
  
    const { introTxt,concTxt } = props.formData;
    
  

    return(
        <>
        <div class='mainpage'>
        <textarea class="inpBox" id="introtxt" 
          type="textarea"   value={introTxt}/>
          <div class="container" style={{maxWidth:'850px', alignItems:'center'}}>
            {props.load && <Course {...props}/>}
          </div>

          <textarea class="inpBox" id='conctxt'
          type="textarea"  value={concTxt}/>
        </div>
        </>);
    }
export default Main;