import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/Counter/Counter';
// import './styles.css'

ReactDOM.render(
  <Counter />,
  document.getElementById('app')
);

module.hot.accept();