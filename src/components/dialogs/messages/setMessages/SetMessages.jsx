import React from 'react';
import style from './SetMessages.module.css';

const SetMessages = (props) => {

    const bindMessage = React.createRef();

    const getValueMessage = () => {
        let value = bindMessage.current.value;
        props.setMessage(value);
        bindMessage.current.value = "";
    }

    return(
        <div className={style.container}>
           <textarea ref={bindMessage}></textarea>
           <button onClick={getValueMessage}>Add Messages</button>    
        </div>
    )
}

export default SetMessages;