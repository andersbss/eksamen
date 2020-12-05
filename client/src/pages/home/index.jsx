import React from 'react';
import Jumbotron from '../../components/common/Jumbotron';
import HomeGrid from '../../components/grids/HomeGrid';
import HomeLayout from '../../layouts/HomeLayout';

const Home = () => (
  <>
    <Jumbotron headerText="Velkommen til FG Rørleggerservice AS" />
    <HomeLayout>
      <HomeGrid />
    </HomeLayout>
  </>
);

export default Home;
