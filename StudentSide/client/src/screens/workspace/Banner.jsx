import React, { useState } from 'react';
//import { Link } from 'react-router-dom';

const Banner=(props)=>{
    
    const { title, tag, author, descript } = props.formData;
    

    return(
        <>
    <div class="hero-host">
      <div class="container">
        <div class="row">
          <div style={{width:'fit-content', textAlign:'center', flexGrow:"1"}}>
          <textarea class="inpBox" id="PHead"
          type="text"  value={title}/><br />
          <textarea class="inpBox" id="tagline"
          type="textarea"  value={tag}/>
          </div>
          <div style={{width:'fit-content', flexGrow:"1",display:'flex', flexDirection:'column', justifyContent:'flex-end', flexWrap:'wrap', columnGap:'0px'}}>
         <input class="inpBox" id="author"
          type="textarea"   value={author}/>
          <input class="inpBox" id="descript"
          type="textarea"   value={descript}/>
          </div>
        </div>  
          
      </div>
    </div>
        </>);
    }
export default Banner;