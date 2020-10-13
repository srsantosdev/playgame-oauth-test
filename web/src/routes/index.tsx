import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import OAuthFacebook from '../pages/OAuthFacebook';
import OAuthGoogle from '../pages/OAuthGoogle';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/g/auth" component={OAuthGoogle} />
        <Route path="/f/auth" component={OAuthFacebook} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
