import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = () => {
  const token = Cookies.get('jwt_token');
  
  // If there's no token, redirect to login page
  if (token === undefined) {
    return <Navigate to="/login" />;
  }
  
  // If authenticated, render the desired component (child routes)
  return <Outlet />;
};

export default ProtectedRoute;
