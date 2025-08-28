import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

interface ProtectedRouteProps {
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, ...rest }) => {
  const { user } = useSelector((state: RootState) => state.auth);
 
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
