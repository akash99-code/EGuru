import React,{ Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import { isAuth } from './helpers/auth';
class ProtectedRoute extends Component {
  render() {
    const { component: Component, ...props } = this.props;

    return (
      <Route 
        {...props} 
        render={props => (
          isAuth()!==false ?
            <Component {...props} /> : <Redirect to='/login' />
        )} 
      />
    )
  }
}

export default ProtectedRoute;