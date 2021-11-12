import React from 'react';
import {
  Route,
} from 'react-router-dom';
// import routes from '../routeConfig';

export default function RouteWithSubRoutes(route: any) {
  const { path } = route;
  return (
    <Route
      path={path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
