import React from 'react';
import style from './SetMessages.module.css';

const SetMessages = (props) => {

    const bindTextarea = React.createRef();

    const getValueMessage = () => {
        props.setMessage();
    }

    const getPresentValue = () => {
        let value = bindTextarea.current.value;
        props.setNewMessageText(value);
    }
    console.log(props.newMessageText)
    
    return(
        <div className={style.container}>
           <textarea onChange={getPresentValue} ref={bindTextarea} value={props.newMessageText}/>
           <button onClick={getValueMessage}>Add Messages</button>    
        </div>
    )
}

export default SetMessages;