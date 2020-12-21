import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(
  <React.StrictMode>
    <link rel="stylesheet" type="text/css"
      href="http://yui.yahooapis.com/2.7.0/build/reset-fonts-grids/reset-fonts-grids.css" media="all" />
    <link rel="stylesheet" type="text/css" href="resume.css" media="all" />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


