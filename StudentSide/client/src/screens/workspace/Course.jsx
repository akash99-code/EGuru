import React from 'react';
import { useHistory } from "react-router-dom";
import Eye from '../../images/eye.png';
import Edit from '../../images/enter.png';
import axios from 'axios';

function Course(props) {
  let history = useHistory();
  const CL = props.Courses.CourseList;
  const pageId=props.Courses.PageId;
  console.log(CL.length, pageId);
  
console.log(CL);
/////////

  return (
    <>
      
      <div style={{ display: 'flex', flexFlow: 'row wrap', gap: '100px', justifyContent:'center', position:'static' }}>
        {CL.map(C=>(
         
         <div class="courseCard" >
          <div class="image">
            <img src="https://picsum.photos/300" alt="" />
          </div>

          <div class="wrapper">
            <input class="inpBox" id="cTitle" value={C.cname}/>
            <textarea class="inpBox" value={C.descript}/>
            <table class="ctable">
              <tr><td>Duration</td><td>0 hrs</td></tr>
              <tr><td>Ratings</td><td>0 %</td></tr>
              <tr><td>Enrolled</td><td>0 </td></tr>
            </table>
            <div class="btns">
              <button title="Enroll" onClick={() => history.push(pageId+'/enroll/'+C.id)} ><img src={Edit} alt='enroll' /></button>
              <button title="View Course" onClick={() => history.push(pageId+'/courseview/'+C.id)} ><img src={Eye} alt='view' /></button>
            </div>
          </div>
        </div>

        ))}
      </div>


    </>
  );

}
export default Course;