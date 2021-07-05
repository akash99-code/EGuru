import reactDom from 'react-dom';
import img from '../images/Course.jpg';
import { useEffect, useState } from 'react';
import Eye from '../images/eye.png';
import { useHistory } from "react-router-dom";
import '../App.css'
import axios from 'axios';

function Courses() { 
  const [Courses, setCourses] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:4000/api/rout/Courses')
      .then(res => {
        console.log(res.data)
        setCourses(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
  }, [])
    //const CL = [{id:1,Title:"Calculas",Descrip:"Interesting"}];
   // useEffect(() => {
     // fetch('/Courses')
       // .then((data) => {
         // console.log(data);
        //})

        //`${process.env.REACT_PAGE_API_URL}/Courses`
    //}, []);



    return ( <>
              <div className='nav2'>
                  <h1>Courses</h1>
              </div>
  {/*<img src ={img}  alt="IMAGE" width="5800"/>*/}
            
            <div style={{ display: 'flex', flexFlow: 'row wrap', gap: '100px', justifyContent:'center', position:'static'}}>
             {Courses.map(Course=>(
         
              <div class="courseCard" key={Course.id}>
              <div class="image">
              <img src="https://picsum.photos/300" alt="" />
              </div>

          <div class="wrapper">
            <input class="inpBox" id="cTitle"
              placeholder="course name" value={Course.cname}/>
            <textarea class="inpBox"
              placeholder="course description" value={Course.descript}/>
            <table class="ctable">
              <tr><td>Duration</td><td>0 hrs</td></tr>
              <tr><td>Ratings</td><td>0 %</td></tr>
              <tr><td>Enrolled</td><td>0 </td></tr>
            </table>
            {/*<div class="btns">
              
              <button title="View Course" onClick={() => history.push('builder/courseview/'+C.id)} ><img src={Eye} alt='view' /></button>
        </div>*/}
          </div>
        </div>

        ))}
        <div style={{width:'270px',height:'300px'}}>
        <button class="addCourse"  title="Enroll">+</button></div>
      </div>
     

  </>
     );
}
 
export default Courses;