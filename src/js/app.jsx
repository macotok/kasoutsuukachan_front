import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './container/Home';
import About from './container/About';
import Terms from './container/Terms';
import Contact from './container/Contact';

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

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
