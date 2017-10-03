import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Main from './Main';

const App = () => {
  return (
    <div className="app-container">
      <Switch>
        <Route path="/" render={({ history }) => <Main history={history} />} />
      </Switch>
    </div>
  );
};

export default App;
