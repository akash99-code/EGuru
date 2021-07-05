import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import Subsection from './Subsections';

const Sections=(props)=>{
  const Secs=props.state.sections;

  function toggle(event){
      event.preventDefault();
      let d=event.currentTarget.nextElementSibling;
      let e=event.currentTarget.firstChild;
      if(d.style.display==='none')
      {
        d.style.display='block';
        e.style.transform='none';
      } 
      else{
        d.style.display='none';
        e.style.transform='rotate(-90deg)';
    }

  }
    return(
        <>
        {Secs.map((S,index)=>(
            <div>
            <div class='Csections' onClick={(event)=>toggle(event)}>
            <i class="fa fa-caret-down" />
            <input placeholder="Section Name" onChange={(event) => props.dispatch({type: 'sectionName', payload:[index,event]})} value={S}/>
            <i class="fas fa-trash" onClick={(event) => props.dispatch({type: 'delsection', payload:index})}></i>
            </div>
            <Subsection  SecIndex={index} {...props}/>
        </div>
        ))}
        
        <div class='Csections' onClick={() => props.dispatch({type: 'addNewSection'})}>
            <p style={{marginLeft:'0px', cursor:'pointer'}}><i class="fas fa-plus-circle"/> &nbsp;&nbsp;Add New Section</p>
        </div>
        </>);
    }
export default Sections;