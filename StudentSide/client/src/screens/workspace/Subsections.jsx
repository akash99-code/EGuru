import React, { useState } from 'react';
//import { Link } from 'react-router-dom';

const SubSection=(props)=>{
    const Conts=props.state.subsections[props.SecIndex];

    return(
        <>
        <div class="sscont">
        {Conts.map((C,index)=>(
            <div class='subsect' onClick={()=>props.dispatch({type:'select', payload:[props.SecIndex,index]})}>
            <input value={C} />
        </div>
        ))}
        
        </div>
        </>);
    }
export default SubSection;