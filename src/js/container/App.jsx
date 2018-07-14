import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Top from './Top';
import About from './About';

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
