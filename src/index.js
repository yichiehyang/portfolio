import React from 'react';
import ReactDOM from 'react-dom';

import Page from './components'
import 'materialize-css/dist/css/materialize.min.css'
import './index.css'
ReactDOM.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
  document.getElementById('root')
);

