import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/sass/custom-materialize.scss';
import M from 'materialize-css/dist/js/materialize';
import './scss/style.scss';
import App from './App.jsx';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render( < App / > , document.getElementById('root'));

M.AutoInit();