import React, {Component} from 'react'

class Login extends Component {
    
   render(){
       return(
        <form id="login" method="get" action="login.php">    
        <label><b>User Name</b></label>
        <input type="text" name="Uname" id="Uname" placeholder="Username"/>
        <br></br>
        <label><b>Password</b></label>
        <input type="Password" name="Pass" id="Pass" placeholder="Password"/>
        <br></br>    
      <input type="button" name="log" id="log" value="Log In Here"/>       
      <br></br>
      <input type="checkbox" id="check"/>   
      <span>Remember me</span>    
      <br></br>    
      Forgot <a href="#">Password</a>
  </form>
       )
   }
}
export default Login;

{/*<form id="login" method="get" action="login.php">    
          <label><b>User Name</b></label>
          <input type="text" name="Uname" id="Uname" placeholder="Username"/>
          <br></br>
          <label><b>Password</b></label>
          <input type="Password" name="Pass" id="Pass" placeholder="Password"/>
          <br></br>    
        <input type="button" name="log" id="log" value="Log In Here"/>       
        <br></br>
        <input type="checkbox" id="check"/>   
        <span>Remember me</span>    
        <br></br>    
        Forgot <a href="#">Password</a>
    </form> */}