import React from 'react'
import { Navigate } from 'react-router-dom';

const Privateroutesadmin = ({children}) => {
    const isAuthenticated = true; // Replace this with actual authentication logic

  return isAuthenticated ? children : <Navigate to="/" />;
};

  


export default Privateroutesadmin