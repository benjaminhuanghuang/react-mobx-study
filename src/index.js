import React from 'react';
import ReactDOM from 'react-dom';

// import Counter from './components/Counter/Counter';
import Main from './containers/';
// import './styles.css'

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);

module.hot.accept();