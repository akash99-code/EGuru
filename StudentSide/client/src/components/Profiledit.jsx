import axios from 'axios';
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Profiledit = () => { 

    const [formData, setFormData] = useState({
        firstname:'',
        lastname:'',
        email:'',
        country:'',
        state:'',
        city:'',
        eduStatus:'',
        phone:''
    });

    const {firstname,lastname,email,country,state,city,eduStatus,phone} = formData;

    
    const handleChange=text=>e=>{
        setFormData({...formData,[text]:e.target.value});
    }

    const handleSubmit=e=>{
        e.preventDefault();
        
                axios.post('http://localhost:4000/api/rout/stu',{firstname,lastname,email,country,state,city,eduStatus,phone})
                .then(res=>{
                    setFormData({...formData, firstname:'',lastname:'',email:'',country:'',state:'',city:'',eduStatus:'',phone:''});
                    toast.success(res.data.message);
                })
                .catch(err => {
                    setFormData({
                      ...formData,
                      firstname:'',
                      lastname:'',
                      email:'',
                      country:'',
                      state:'',
                      city:'',
                      eduStatus:'',
                      phone:'',
                    });
                    console.log(err);
                    toast.error(err.response.data.error);
                  });
                
            }
            

    return( 
    <form onSubmit={handleSubmit} >    
    <body>
    <section>
        <article>
            <div>
        <label for="First Name">First Name</label><br/>
        <input type="text" value={firstname} onChange={handleChange('firstname')}  required/>
        </div>
        <div>
        <label for="Last Name">Last Name</label><br/>
        <input type="text" value={lastname} onChange={handleChange('lastname')}  required/></div> 
        <div>
        <label for="Email">Email</label><br/>
        <input type="email" value={email} onChange={handleChange('email')}   required/>
        </div>
        <div>
        <label for="Country">Country</label><br/>
        <input type="text"  value={country} onChange={handleChange('country')}  required/></div>
        
        <div>
        <label for="State">State</label><br/>
        <input type="text"  value={state} onChange={handleChange('state')}  required/></div>
        
        <div>
        <label for="City">City</label><br/>
        <input type="text" value={city} onChange={handleChange('city')}  required/></div>
        
        <div>
        <label for="Phone">Phone</label><br/>
        <input type="number"  value={phone} onChange={handleChange('phone')} pattern="[0,9]" required/>
        </div>

        <div>
        <label for="Edu Status">Edu Status</label><br/>
        <input type="text"  value={eduStatus} onChange={handleChange('eduStatus')}  required/>
        </div>
        </article>
        <button style={{fontSize:'90px', textAlign:'center', padding:'20px',border: '5px solid #050505', 
         color: 'rgb(14, 13, 13)',  borderRadius:'12px', backgroundColor:'white'}}>Update</button>
    </section>
    
</body>
      </form> 
      
      )
  }
  export default Profiledit;
  //pattern="[A,Z], [a,z],[0,9]"