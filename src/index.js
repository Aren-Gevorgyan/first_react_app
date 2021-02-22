import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.module.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import state, { setPost } from './state/state';

ReactDOM.render( < React.StrictMode >

    { /* bind url */ } <
    BrowserRouter >
    <
    App state = { state }
    setPost = { setPost }
    /> <
    /BrowserRouter >  <
    /React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();