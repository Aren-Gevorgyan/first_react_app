import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.module.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let arrayPosts = [
    { post: 'My first post', like: 5 },
    { post: 'My second post', like: 2 },
    { post: 'My third post', like: 7 },
]
let arrayPerson = [
    { id: 1, name: 'Armen' },
    { id: 2, name: 'Arman' },
    { id: 3, name: 'Karmen' },
    { id: 4, name: 'Aren' },
];

let arrayMessages = [
    { id: 1, message: 'hi' },
    { id: 2, message: 'are you good?' },
    { id: 3, message: 'yes good' },
];


ReactDOM.render( < React.StrictMode > { /* bind url */ } <
    BrowserRouter >
    <
    App posts = { arrayPosts }
    dialogsPerson = { arrayPerson }
    messages = { arrayMessages }
    /> <
    /BrowserRouter>    <
    /React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();