import React from 'react';
import style from './SetMessages.module.css';
import {createActionAddMessages, createActionSetMessagesText} from "../../../../store/reduce/dialogReduce";

const SetMessages = (props) => {

    const bindTextarea = React.createRef();

    const getValueMessage = () => {
        props.dispatch(createActionAddMessages());
    }

    const getPresentValue = () => {
        let newText = bindTextarea.current.value;
        props.dispatch(createActionSetMessagesText(newText));
    }
    
    return(
        <div className={style.container}>
           <textarea onChange={getPresentValue} ref={bindTextarea} value={props.newMessageText}/>
           <button onClick={getValueMessage}>Add Messages</button>    
        </div>
    )
}

export default SetMessages;