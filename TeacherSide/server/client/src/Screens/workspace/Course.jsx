import React from 'react';
import { useHistory } from "react-router-dom";
import Eye from '../../assets/eye.png';
import Edit from '../../assets/edit.png';
import axios from 'axios';

function Course(props) {
  let history = useHistory();
  const CL = props.Courses.CourseList;
  const pageId=props.Courses.PageId;
  console.log(CL.length, pageId);
  if(CL.length===0 && pageId!=='')
  {
    addCourse();
  }
  function addCourse() 
  { 
    axios.post(`${process.env.REACT_APP_API_URL}/builder/createCourse`,{pageId})
      .then(res => {
        console.log(res.data);
        props.Courses.listing(CL => [...CL, res.data.Cdoc]);
      })
      .catch(err => {
         alert('oops eror occured!');
          console.log(err.message);
        }
      );
      //props.Courses.listing(CL => [...CL, {cname:'', descript:''}]);

  }
  
console.log(CL);
/////////

  return (
    <>
      
      <div style={{ display: 'flex', flexFlow: 'row wrap', gap: '100px', justifyContent:'center', position:'static' }}>
        {CL.map((C, index)=>(
         
         <div class="courseCard" key={index}>
          <div class="image">
            <img src="https://picsum.photos/300" alt="" />
          </div>

          <div class="wrapper">
            <input class="inpBox" id="cTitle"
              placeholder="course name" value={C.cname} onChange={props.Courses.courseChange(index, 'cname')}/>
            <textarea class="inpBox"
              placeholder="course description" value={C.descript} onChange={props.Courses.courseChange(index, 'descript')}/>
            <table class="ctable">
              <tr><td>Duration</td><td>0 hrs</td></tr>
              <tr><td>Ratings</td><td>0 %</td></tr>
              <tr><td>Enrolled</td><td>0 </td></tr>
            </table>
            <div class="btns">
              <button title="Edit Course" onClick={() => history.push('builder/coursedesign/'+C.id)} ><img src={Edit} alt='edit' /></button>
              <button title="View Course" onClick={() => history.push('builder/courseview/'+C.id)} ><img src={Eye} alt='view' /></button>
            </div>
          </div>
        </div>

        ))}
        <div style={{width:'270px',height:'300px'}}>
        <button class="addCourse" onClick={addCourse} title="Add New Course">+</button></div>
      </div>


    </>
  );

}
export default Course;