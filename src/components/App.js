import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Main from './Main';
import BurgerMenu from './BurgerMenu';
import '../helper/navbar';
import '../helper/icon-animation';

const App = () => {
  return (
    <div className="app-container">
      <BurgerMenu />
      <Switch>
        <Route path="/" render={({ history }) => <Main history={history} />} />
      </Switch>
    </div>
  );
};

export default App;
