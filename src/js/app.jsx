import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Page from './container';
import Reducer from './reducers';

const allReducers = combineReducers({
  thread: Reducer.Thread,
  post: Reducer.Post,
  form: formReducer,
});

const store = createStore(allReducers);

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Page.Home} />
        <Route path="/about" component={Page.About} />
        <Route path="/terms" component={Page.Terms} />
        <Route path="/contact" component={Page.Contact} />
        <Route path="/regist" component={Page.Regist} />
        <Route path="/login" component={Page.Login} />
        <Route exact path="/:ticker" component={Page.PostList} />
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
