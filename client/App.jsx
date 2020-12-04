import React from 'react';
import Theme from './src/styles/Theme';
import Routes from './src/routes/Routes';
import UserContext from './src/context/UserContext';

const App = () => (
  <Theme>
    <UserContext>
      <Routes />
    </UserContext>
  </Theme>
);

export default App;
