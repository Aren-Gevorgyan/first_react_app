import React from 'react';
import style from './Messages.module.css';
import MessagesItem from './messagesItem/MessagesItem';
import SetMessages from './setMessages/SetMessages';

const Messages = (props) => {

    let messages = props.arrayMessages
    .map(element => <MessagesItem key={element.id} message={element.message} id={element.id}/>) 
    
    return (
        <div className={style.container}>
            <ul>
               {messages}
            </ul>
            <SetMessages
              addMessages={props.addMessages}/>
        </div>
    )
}

export default Messages;