import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../images/profile picture.jpg';
import '../index.css'
import { useEffect} from 'react';
import Profiledit from'./Profiledit';
import { Link,Route } from 'react-router-dom';
const Profile = (props) => {
  
  const formData = props.formData;
  console.log(props,formData);
  
  
  useEffect(() => {
    fetch('http://localhost:4000/Profile')
      .then((data) => {
        console.log(data);
      })
  }, []); 
  
 
  return (
    <>
      <div className='nav2'><h1>Profile</h1></div>
      
        <img src={img} alt='profile' width='900'/>
      <div className='pro'> 
        <h1>{formData}</h1>
        
        <Link to = "/Profile/Profiledit" >edit</Link>
      </div>
      
    </>
             );
}

export default Profile;
