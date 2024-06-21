import React from 'react'
import { Navigate } from 'react-router-dom';
import Login from '../pages/Login';

const PrivateRoute = ({isLoggedIn ,children}) => {
  if(isLoggedIn){
    return children;
  }
  else{
    return <Navigate to="/login" />
  }
}

export default PrivateRoute
