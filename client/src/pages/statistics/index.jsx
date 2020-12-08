import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Jumbotron from '../../components/common/Jumbotron';
import TopArticlesList from '../../components/lists/TopArticlesList';
import useFetch from '../../hooks/useFetch';

const Statistics = () => (
  <>
    <Jumbotron headerText="Statistikk" top="70" bottom="0" />
  </>
);

export default Statistics;
