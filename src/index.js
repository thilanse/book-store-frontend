import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

// axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");

// (function() {
//     const token = localStorage.getItem("token");
//     if (token) {
//         axios.defaults.headers.common['Authorization'] = "Bearer " + token;
//     } else {
//         axios.defaults.headers.common['Authorization'] = null;
//         /*if setting null does not remove `Authorization` header then try
//           delete axios.defaults.headers.common['Authorization'];
//         */
//     }
// })();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
