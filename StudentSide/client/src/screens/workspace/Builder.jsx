import React, { useState } from 'react';
import NaviDesgn from './NaviDesgn';
import Banner from './Banner';
import Sidepane from './sidepane';
import Main from './Main';
import Footer from './CustoFooter';

import { useParams } from "react-router";
import useFetch from '../../useFetch';
import { isAuth } from '../../helpers/auth';
import axios from 'axios';
import '../../App.css';

function Builder(props) {
 
  const [load, setload]=useState(0);
  const [cload, setcload]=useState(0);
  const [formData, setFormData]= useState({title:'', tag:'', author:'', descript:'', introtxt:'',conctxt:'',about:'',contacts:''});
  const [PageId, pagit] = useState('');
  const [CourseList, listing] = useState([]);

  let { pageId } = useParams();
  const { data, error} = useFetch('/builder/pageinfo',{pageId});
  if(data && !load)
  {  
    setFormData(data.pageDetails);
    pagit(data.pageDetails._id);
    setload(1);
  }
  
  if(!cload && load && data)
  {
    if(data.pageDetails.courses.length!==0)
    {
      ///////////useFetch to get all coursesn
      console.log(data.pageDetails.courses);
      axios.post(`${process.env.REACT_APP_API_URL}/builder/courseheads`, {list:data.pageDetails.courses})
      .then(res => {
        console.log(res.data);
        listing(res.data.cheads);
        setcload(1);
      })
      .catch(err => {
         alert('oops eror occured!');
          console.log(err.message);
        }
      );
    }
    else{
      setcload(1);
    }
  }




  return (
    <>
    {load && <Banner formData={formData} />}
    <div>
      <div class='content'>
        <Main formData={formData}  load={cload} Courses={{CourseList, PageId}}/>
        <Sidepane/>
      </div>
    </div>
    {load && <Footer formData={formData} />}
    </>
    );
}

export default Builder;
/**
 <Navbar bg="dark" variant="dark">
    <Nav defaultActiveKey="/" as="ul" className="justify">
      <Nav.Item as="li">
        <Nav.Link href="/" disabled>EGURU</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
          <Nav.Link  href="/profile">{isAuth().name}</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
          <Nav.Link  onSelect={signout} href="/login">SignOut</Nav.Link>
      </Nav.Item> 
      <Nav.Item as="li">
          <Nav.Link  onSelect={signout} >Save</Nav.Link>
      </Nav.Item>     
    </Nav>
    </Navbar>*/



/**
<div>
  {CourseList.map(C => (
    <div key={C.id} >
        <h2>{ C.title }</h2>
    </div>
  ))}
  </div>
  <div>
        <input 
          type="text" 
          required 
          id="Title"
          placeholder="Title"
        />
        <input 
          type="text" 
          required 
          id="id"
          placeholder="id"
        />
        <button onClick={addCourse}>Add Course</button>
  
  </div>*/