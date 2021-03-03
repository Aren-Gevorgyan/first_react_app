import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.module.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import { Provider } from 'react-redux';

const renderApp = () => {
    ReactDOM.render( <
        React.StrictMode > { /* bind url */ } <
        BrowserRouter >
        <
        Provider store = { store } >
        <
        App / >
        <
        /Provider>  <
        /BrowserRouter >  <
        /React.StrictMode>,
        document.getElementById('root')
    );
}

renderApp();
store.subscribe(renderApp);

reportWebVitals();