import React from 'react';
import ReactDom from 'react-dom';

const App = () => (
  <p>
    Hello World
  </p>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(<App />, document.getElementById('app'));
});
