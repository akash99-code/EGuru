import React,{useState} from 'react';
import { Link } from 'react-router-dom';
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
        content={type:'',link:''};
    }
    return(
        <>
        <div class='coursecont'>
        <i class="fas fa-chevron-circle-left" onClick={()=>props.dispatch({type:'selectprev'})}></i>
        <i class="fas fa-chevron-circle-right" style={{float:'right'}} onClick={()=>props.dispatch({type:'selectnext'})}></i>
        <div class='container' style={{marginTop:'20px'}}>
            <h4 style={{margin:'auto', textAlign:'center',letterSpacing:'2px', color:'grey'}}>{head}</h4>
            <div class='contBox'>
            {content && <>
                {content.type===''?
                <><i class="far fa-file-video" title='add video' onClick={()=>props.dispatch({type: 'setType', payload:'video'})}></i>
                <i class="far fa-file-pdf" title='add pdf' onClick={()=>props.dispatch({type: 'setType', payload:'pdf'})}></i>
                <i class="far fa-clipboard" title='add assignment' onClick={()=>props.dispatch({type: 'setType', payload:'assignment'})}></i></>:
                <><input type='text' class='link-input' placeholder={'enter '+content.type+' url link'} value={content.link} onChange={(eve)=>props.dispatch({type: 'setLink', payload:eve})}/>
                <i class="fas fa-undo" style={{fontSize:'14px'}} title='reset' onClick={()=>props.dispatch({type:'reset'})}></i></>}
                <i class="fas fa-thumbs-up" id="like"></i>
                </>
            }
            </div>
            
            <Feedback/>
        </div>
        </div>
        </>);
    }
export default CourseCont;