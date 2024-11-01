import React, { useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from './authcontextprovider';
import axios from 'axios';
import Cookies from 'js-cookie';
import { server } from '../../states/api'


function AuthenticatedLayout() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  useEffect(()=>{
    const token = Cookies.get('token');
    if(token){
        axios.get(`${server}/api/user/verifyToken`, {
           withCredentials: true,
          })
          .then(response => {
            if (response.status === 200) {
              setIsAuthenticated(true);
            }
          })
          .catch(error => {
            console.error('Token verification failed:', error);
            setIsAuthenticated(false);
          });
    }
},[setIsAuthenticated]);


  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />; // Renders the child route components if authenticated
}

export default AuthenticatedLayout;
