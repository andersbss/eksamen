import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const Routes = () => {
  console.log('yo');

  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/hjem">
            <p>Hjem</p>
          </Route>
          <Route path="/kontorer">
            <p>Kontorer</p>
          </Route>
          <Route path="/kontorer/:id">
            <p>Spesifikt kontor</p>
          </Route>
          <Route path="/fagartikler">
            <p>Fagartikler</p>
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
};

export default Routes;
