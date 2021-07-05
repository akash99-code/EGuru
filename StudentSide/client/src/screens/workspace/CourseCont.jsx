import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import ReactPlayer from "react-player";
import Feedback from './feedback';

const CourseCont=(props)=>{
    
    let head='';
    let content={type:'',link:''};
    try{
    const sel=props.state.selected;
    head=props.state.subsections[sel[0]][sel[1]];
    content=props.state.content[sel[0]][sel[1]];
    }
    catch(err){
        head='';
        content=null;
    }
    return(
        <>
        <div class='coursecont'>
        <i class="fas fa-chevron-circle-left" onClick={()=>props.dispatch({type:'selectprev'})}></i>
        <i class="fas fa-chevron-circle-right" style={{float:'right'}} onClick={()=>props.dispatch({type:'selectnext'})}></i>
        <div class='container' style={{marginTop:'20px'}}>
            <h4 style={{margin:'auto', textAlign:'center',letterSpacing:'2px', color:'grey'}}>{head}</h4>
            <div class='contBox'>
            {content? 
                <><ReactPlayer url={content.link}/>
                <i class="fas fa-thumbs-up" id="like"></i>
                </>:<p class='para'>No Access</p>
            }
            </div>
            
            <Feedback/>
        </div>
        </div>
        </>);
    }
export default CourseCont;