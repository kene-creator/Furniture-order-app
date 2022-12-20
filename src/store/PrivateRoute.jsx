/* eslint-disable */
import React from 'react';
import { redirect, Route } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : redirect('/checkout')
      }
    ></Route>
  );
};

export default PrivateRoute;
