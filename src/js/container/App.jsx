import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Terms from './Terms';
import Contact from './Contact';

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/terms" component={Terms} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
