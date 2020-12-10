import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home';
import Offices from '../pages/officesvs';
import OfficeDetail from '../pages/officeDetail/index';
import CreateArticle from '../pages/createArticle';
import Articles from '../pages/articles';
import Login from '../pages/login';
import NotFound from '../pages/notFound';
import ArticleDetail from '../pages/articleDetail';
import Register from '../pages/register';
import Contact from '../pages/contact';
import AdminRoute from './AdminRoute';
import SuperAdminRoute from './SuperAdminRoute';
import Statistics from '../pages/statistics';
import TopArticles from '../pages/topArticles';
import ArticleVisits from '../pages/articlevisits';
import UserVisits from '../pages/uservisits';
import Contacts from '../pages/contacts';

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
          <Contact />
        </Route>
        <AdminRoute path="/nyartikkel">
          <CreateArticle />
        </AdminRoute>
        <AdminRoute path="/redigerartikkel/:id">
          <CreateArticle />
        </AdminRoute>
        <AdminRoute path="/meldinger">
          <Contacts />
        </AdminRoute>
        <SuperAdminRoute path="/statistikk">
          <Statistics />
        </SuperAdminRoute>
        <SuperAdminRoute path="/topartikler">
          <TopArticles />
        </SuperAdminRoute>
        <SuperAdminRoute path="/artikkelvisninger">
          <ArticleVisits />
        </SuperAdminRoute>
        <SuperAdminRoute path="/brukervisninger">
          <UserVisits />
        </SuperAdminRoute>
        <Redirect exact from="/" to="/hjem" />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
