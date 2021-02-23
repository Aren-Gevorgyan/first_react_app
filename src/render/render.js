import React from 'react';
import ReactDOM from 'react-dom';
import style from '../index.module.css';
import App from '../components/app/App';
import reportWebVitals from '../reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const renderApp = (state, setPost, setMessage, setNewPostText, setNewMessageText) => {

    ReactDOM.render( <React.StrictMode >
        { /* bind url */ }
        <BrowserRouter >
        <App 
          state={ state } 
          setPost={setPost} 
          setMessage={setMessage} 
          setNewPostText={setNewPostText}
          setNewMessageText={setNewMessageText}/>
        </BrowserRouter > 
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default renderApp;

reportWebVitals();