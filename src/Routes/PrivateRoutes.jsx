import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoutes = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  console.log(location);


  if(loading) {
    <span className="loading loading-spinner loading-lg text-error"></span>
  }

  if(user) {
    return children;
  }

  return (
    <Navigate to='/login' state={location.pathname}>
    </Navigate>
  );
};

PrivateRoutes.propTypes = {
  children: PropTypes.node
};

export default PrivateRoutes;