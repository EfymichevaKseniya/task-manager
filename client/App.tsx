import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import routes from './routeConfig';
import './App.scss';
import RouteWithSubRoutes from './services/RoutesWithSubRoutes';

function App() {
  return (
    <Switch>
      <>
        <div className='App'>
          <div className='page'>
            {routes.map((route, i) => (
              <RouteWithSubRoutes {...route} key={`${i + 31904}`} />
            ))}
            <Redirect exact from='/' to='/auth' />
            {/* <Redirect from='/' to='/404' /> */}
          </div>
        </div>
      </>
    </Switch>
  );
}

export default App;
