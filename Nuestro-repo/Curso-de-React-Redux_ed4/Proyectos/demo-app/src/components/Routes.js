import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Users from './pages/Users';
import Home from './pages/Home';

const Routes = () => {
  return (
    <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/users">
      <Users />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
  )
};

export default Routes;
