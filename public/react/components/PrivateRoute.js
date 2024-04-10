import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';


const PrivateRouteWrapper = ({ roles, children }) => {
    const { isAuthenticated, userRole } = useContext(AuthContext);
    const navigate = useNavigate();
  
    if (!isAuthenticated) {
      navigate('/login');
      return null;
    } else if (roles && !roles.includes(userRole)) {
      navigate('/error');
      return null;
    } else {
      return children;
    }
  };

export { PrivateRouteWrapper };