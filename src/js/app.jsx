import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './reducers';
import Page from './container';

const allReducers = combineReducers({
  thread: Reducer.Thread,
  post: Reducer.Post,
});

const store = createStore(allReducers);

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Page.Home} />
        <Route exact path="/:ticker" component={Page.PostList} />
        <Route path="/about" component={Page.About} />
        <Route path="/terms" component={Page.Terms} />
        <Route path="/contact" component={Page.Contact} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
