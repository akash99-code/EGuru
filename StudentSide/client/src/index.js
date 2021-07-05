import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Register from './screens/Register';
import Activate from './screens/Activate';
import Login from './screens/Login';
import Home from './components/Home';
import ForgetPassword from './screens/ForgetPassword';
import ResetPassword from './screens/ResetPassword';
import ProtectedRoute from './ProtectedRoute'
import Builder from './screens/workspace/Builder';
import RequestPage from './screens/workspace/requestpage';
import CourseDesign from './screens/workspace/CourseDesign';
import Profile from './components/Profile';
import About from './components/About';
import Courses from './components/Courses';
import './App.css';
import Profiledit from'./components/Profiledit';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={props => <Home {...props}/>}/>    
          <Route  path='/About'  render={props => <About {...props}/>}/>
  <Route  path='/Courses' render={props => <Courses {...props}/>}/>
  <Route  path='/Profile/Profiledit' render={props => <Profiledit {...props}/>}/>      
  <Route  path='/signout' render={props => <signout {...props}/>}/>    
        <Route path='/login' exact render={props =><Login {...props}/>}/>
        <Route path='/register' exact render={props =><Register {...props}/>}/>
        <Route path='/users/activate/:token' exact  render={props=> <Activate {...props}/>}/>
        <Route path='/users/password/forget' exact render={props =><ForgetPassword {...props}/>}/>
        <Route path='/users/password/reset/:token' exact render={props =><ResetPassword {...props}/>}/>
        <Route path='/:pageId' exact render={props =><Builder {...props}/>}/>
        <Route path='/:pageId/courseview/:courseId' exact render={props =><CourseDesign {...props}/> }/>
        <ProtectedRoute path='/:pageId/enroll/:courseId' exact component={RequestPage}/>
        <Route  path='/Profile' exact render={props => <Profile {...props}/>}/>

        
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);





/***import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Profile from './components/Profile';
import './index.css';
import Login from './screens/Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Register from './screens/Register';
import Activate from './screens/Activate';
import ForgetPassword from './screens/ForgetPassword';
import ResetPassword from './screens/ResetPassword';
import ProtectedRoute from './ProtectedRoute';
import Profiledit from'./components/Profiledit';
ReactDOM.render(
  <BrowserRouter>
  <div>
  <App/>
    <Switch>
  
  <Route  path='/' exact render={props => <Home {...props}/>}/> 
  <Route  path='/Login' render={props => <Login {...props}/>}/>
  <Route  path='/Register' render={props => <Register {...props}/>}/>
  <Route  path='/users/activate/:token' exact render={props => <Activate {...props}/>}/>
  <Route path='/users/password/forget' exact render={props =><ForgetPassword {...props}/>}/>
  <Route path='/users/password/reset/:token' exact render={props =><ResetPassword {...props}/>}/>


  <Route  path='/Profile' exact render={props => <Profile {...props}/>}/>
  <Route  path='/About'  render={props => <About {...props}/>}/>
  <Route  path='/Courses' render={props => <Courses {...props}/>}/>

  <Route  path='/Profile/Profiledit' render={props => <Profiledit {...props}/>}/>      
          
  <Route  path='/signout' render={props => <signout {...props}/>}/>
       
  
  </Switch>
  <Footer/>
  </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

*/