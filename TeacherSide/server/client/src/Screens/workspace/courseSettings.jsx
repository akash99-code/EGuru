import React, { useState, useReducer } from 'react';
import NaviDesgn from '../Navigator';
import StuNav from './Stunav';
import { useParams } from "react-router";
import MapPane from './MapPane';
import axios from 'axios';
import Content from './CourseCont';
import useFetch from '../../useFetch';



function CourseSettings(props) {
  let { courseId } = useParams();
  
  const [load, setload]=useState(0);
  const [name, setn]=useState('Course Name');
  const [members, init]=useState([]);
  const [Requests, reqs]=useState([]);
 const { data, error} = useFetch('/access/settings',{courseId});
 if(data && !load)
 {
    setn(data.name);
    init(data.members) 
    reqs(data.requests);
    setload(1);
 }
 function permit(student,i){
  axios.post(`${process.env.REACT_APP_API_URL}/access/permit`,{courseId,student})
  .then(res => {
    reqs(Requests.splice(i,1));
    init(members.push(student));
  })
  .catch(err => {
     alert('oops eror occured!');
      console.log(err.message);
    }
  );

 }
 function memDets(id)
 {
  axios.post(`${process.env.REACT_APP_API_URL}/access/memdets`,{id})
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
     alert('oops eror occured!');
      console.log(err.message);
    }
  );
 } 
 
  return (
      <>
      <NaviDesgn />
      <StuNav head={name} Cid={courseId}/>
      <div style={{ background: 'linear-gradient(to top, rgb(245, 245, 245), white)'}}>

      <div class='coursecont'>
        <div class='container' style={{marginTop:'20px'}}>
            <h4 style={{margin:'auto', textAlign:'center',letterSpacing:'2px', color:'grey'}}>Members</h4>
            <div style={{display:'flex', flexWrap:'row wrap'}}>
            <div class="pendingBox">
            <h6 >Pending Requests</h6>
            {Requests.map((M, index)=>(
                <>
                <span>{M.mname} </span><button onClick={()=>permit(M, index)}>permit</button></>
            ))}
            </div>
            <div class='members'>
            <table class='memtable'>
            {members.map(M=>(
                <tr>
                <td>{M.mname} </td><td><button class='navigation-link' style={{height:'auto'}}onClick={()=>memDets(M.memid)}>more details</button> </td>
                </tr>
            ))}
            </table>

            </div>
            </div>
        </div>
        </div>
      </div>
      </>
    
  );
}
export default CourseSettings;