import React from 'react';
import style from './Messages.module.css';
import MessagesItem from './messagesItem/MessagesItem';

const Messages = (props) => {
    return (
        <div className={style.container}>
            <ul>
                <MessagesItem message = "Hi" />
                <MessagesItem message = "are you  programer?" />
                <MessagesItem message = "?" />
            </ul>
        </div>
    )
}

export default Messages;