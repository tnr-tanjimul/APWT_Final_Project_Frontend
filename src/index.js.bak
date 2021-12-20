import React from 'react';
import ReactDOM from 'react-dom';


import AppMain from './AppMain';
import reportWebVitals from './reportWebVitals';


import axios from 'axios';

var token = null;
if(localStorage.getItem('user')){
  var obj = JSON.parse(localStorage.getItem('user'));
  token = obj.access_token;
}
axios.defaults.baseURL="http://127.0.0.1:8000/api/"; //local Server
//axios.defaults.baseURL="http://apwt.tnrsoft.com/api/"; // live Server
axios.defaults.headers.common["Authorization"] = token;

ReactDOM.render(
  <React.StrictMode>
    <AppMain/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
