import React from 'react';
import style from './SetMessages.module.css';

const SetMessages = (props) => {

    const bindTextarea = React.createRef();

    const getValueMessage = () => {
        props.dispatch({type:"ADD-MESSAGES"});
    }

    const getPresentValue = () => {
        let newText = bindTextarea.current.value;
        props.dispatch({type:"SET-NEW-MESSAGES-TEXT", newText});
    }
    
    return(
        <div className={style.container}>
           <textarea onChange={getPresentValue} ref={bindTextarea} value={props.newMessageText}/>
           <button onClick={getValueMessage}>Add Messages</button>    
        </div>
    )
}

export default SetMessages;