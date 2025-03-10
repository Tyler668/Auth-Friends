import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/*
  Private Route rules:
  1. It has the same API as <Route />.
  2. It renders a <Route /> and passes all the props through to it.
  3. It checks if the user is authenticated, if they are, it renders the “component” prop. If not, it redirects the user to /login.
*/
const PrivateRoute = ({ component: Component, ...rest }) => {
  // const Component = props.component
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem('token')) {
          // if token is in localstorage, render the given component
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;

