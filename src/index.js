import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1MainComponent from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

function renderIntoContainer(){

  console.log("Rendering into component: application_container");

  ReactDOM.render(
      <React.StrictMode>
        <App1MainComponent />
      </React.StrictMode>,
      document.getElementById('application_container')
  );
  
}

renderIntoContainer();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
