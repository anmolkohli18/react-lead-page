import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LeadCapturePage from './LeadCapturePage';
import reportWebVitals from './reportWebVitals';
ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(LeadCapturePage, null)), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();