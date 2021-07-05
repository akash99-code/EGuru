import React, { useState } from 'react';
//import { Link } from 'react-router-dom';

const SubSection=(props)=>{
    const Conts=props.state.subsections[props.SecIndex];

    return(
        <>
        <div class="sscont">
        {Conts.map((C,index)=>(
            <div class='subsect' onClick={()=>props.dispatch({type:'select', payload:[props.SecIndex,index]})}>
            <input placeholder="Section Name" onChange={(event) => props.dispatch({type: 'contentName', payload:[props.SecIndex,index,event]})} value={C} />
            <i class="far fa-times-circle" onClick={(event) => props.dispatch({type: 'delcontent', payload:[props.SecIndex,index]})} ></i>
        </div>
        ))}
        
        <div class='subsect' onClick={() => props.dispatch({type: 'addNewContent', payload:props.SecIndex})}>
            <p style={{marginLeft:'0px',marginBottom:'0px'}}><i class="fas fa-plus-circle"></i> &nbsp;&nbsp;Add Content</p>
        </div>
        </div>
        </>);
    }
export default SubSection;