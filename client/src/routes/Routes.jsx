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
import CreateArticle from '../pages/createArticle';
import Articles from '../pages/articles';
import Login from '../pages/login';
import NotFound from '../pages/notFound';
import AuthRoute from './AuthRoute';
import ArticleDetail from '../pages/articleDetail';
import Register from '../pages/register';

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route path="/logginn">
          <Login />
        </Route>
        <Route path="/registrere">
          <Register />
        </Route>
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
        <Route path="/fagartikkel/:id">
          <ArticleDetail />
        </Route>
        <Route path="/kontakt">
          <CreateArticle />
        </Route>
        <AuthRoute path="/nyartikkel">
          <CreateArticle />
        </AuthRoute>
        <AuthRoute path="/redigerartikkel/:id">
          <CreateArticle />
        </AuthRoute>
        <Redirect exact from="/" to="/hjem" />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
