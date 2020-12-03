import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home';
import Offices from '../pages/offices';
import OfficeDetail from '../pages/officeDetail/index';
import Articles from '../pages/articles';

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route path="/hjem">
          <Home />
        </Route>
        <Route path="/kontorer">
          <Offices />
        </Route>
        <Route path="/kontor/:id">
          <OfficeDetail />
        </Route>
        <Route path="/fagartikler">
          <Articles />
        </Route>
        <Route path="/kontakt">
          <p>Kontakt</p>
        </Route>
        <Redirect exact from="/" to="/hjem" />
        <Route path="*">
          <p>404</p>
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
