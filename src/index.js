import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

require('../style/_main.scss');

ReactDOM.render(
  <div>
    <App />
  </div>
  , document.querySelector('.container'));
