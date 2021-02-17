import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.module.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render( <
    React.StrictMode >
    <
    BrowserRouter >
    <
    App / >
    <
    /BrowserRouter>   <
    /React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();