import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './Screens/App';
import Register from './Screens/Register';
import Activate from './Screens/Activate';
import Login from './Screens/login';
import ForgetPassword from './Screens/ForgetPassword';
import ResetPassword from './Screens/ResetPassword';
import Profile from './Screens/Profile';
import ProtectedRoute from './ProtectedRoute'
import Builder from './Screens/workspace/Builder';
import CourseDesign from './Screens/workspace/CourseDesign';

import CourseSettings from './Screens/workspace/courseSettings';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={props =><App {...props}/>}/>
        <Route path='/register' exact render={props =><Register {...props}/>}/>
        <Route path='/users/activate/:token' exact  render={props=> <Activate {...props}/>}/>
        <Route path='/login' exact render={props =><Login {...props}/>}/>
        <Route path='/users/password/forget' exact render={props =><ForgetPassword {...props}/>}/>
        <Route path='/users/password/reset/:token' exact render={props =><ResetPassword {...props}/>}/>
        <ProtectedRoute path='/builder' exact component={Builder} />
        <ProtectedRoute path='/builder/coursedesign/:courseId' exact component={CourseDesign} />
        <ProtectedRoute path='/builder/courseview/:courseId' exact component={CourseSettings} />
        <ProtectedRoute path='/profile' exact component={Profile} />
        
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);


