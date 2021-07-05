import React, { useState } from 'react';
import NaviDesgn from './NaviDesgn';
import Banner from './Banner';
import Sidepane from './sidepane';
import Main from './Main';
import Footer from './CustoFooter';
import useFetch from '../../useFetch';
import { isAuth } from '../../helpers/auth';
import axios from 'axios';
import '../App.css';

function Builder() {
 
  const [load, setload]=useState(0);
  const [cload, setcload]=useState(0);
  const [formData, setFormData]= useState({title:'', tag:'', author:'', descript:'', introtxt:'',conctxt:'',about:'',contacts:''});
  const [PageId, pagit] = useState('');
  const [CourseList, listing] = useState([]);
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
    console.log(formData);
  }
  const token=isAuth().token;
  console.log(token);
  const { data, error} = useFetch('/builder/pageinfo',{token});
  if(data && !load)
  {  
    setFormData(data.pageDetails);
    pagit(data.pageDetails._id);
    setload(1);
    console.log(formData);
    
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

  //on save button clicked
  function save()
  {
    axios.post(`${process.env.REACT_APP_API_URL}/builder/updatePage`, {pagdata:formData, clist:CourseList})
      .then(res => {
        console.log(res.data);
        alert('saved');
      })
      .catch(err => {
         alert('oops eror occured!');
          console.log(err.message);
        }
      );
      
  }
  const courseChange=(ind, field)=> (event)=>{
    let newArr = [...CourseList]; 
    newArr[ind] = {...newArr[ind], [field]:event.target.value};
    listing(newArr);
    console.log(CourseList);
  }


  return (
    <>
    <NaviDesgn save={save}/>
    {load && <Banner formData={formData} handleChange={handleChange}/>}
    <div>
      <div class='content'>
        <Main formData={formData} handleChange={handleChange} load={cload} Courses={{CourseList, listing, PageId, courseChange}}/>
        <Sidepane pageId={PageId}/>
      </div>
    </div>
    {load && <Footer formData={formData} handleChange={handleChange}/>}
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