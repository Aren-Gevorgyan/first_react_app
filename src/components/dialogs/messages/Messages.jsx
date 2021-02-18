import React from 'react';
import style from './Messages.module.css';
import MessagesItem from './messagesItem/MessagesItem';

const Messages = (props) => {

    let messages = props.messages
    .map(element => <MessagesItem message={element.message} id={element.id}/>) 

    return (
        <div className={style.container}>
            <ul>
               {messages}
            </ul>
        </div>
    )
}

export default Messages;