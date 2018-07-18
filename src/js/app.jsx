import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import Home from './container/Home';
import About from './container/About';
import Terms from './container/Terms';
import Contact from './container/Contact';

function threadReducer(state = [], action) {
  return state;
}

function postReducer(state = '', action) {
  switch (action.type) {
    case 'updatePost':
      return action.payload;
  }

  return state;
}

const allReducers = combineReducers({
  thread: threadReducer,
  post: postReducer,
});

const store = createStore(allReducers);

const postAction = {
  type: 'updatePost',
  payload: {
    text: 'first post',
  },
};

store.dispatch(postAction);

console.log(store.getState());

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
