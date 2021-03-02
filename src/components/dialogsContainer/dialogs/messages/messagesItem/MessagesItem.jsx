import React from 'react';
import style from './Messages.module.css';

const MessagesItem = (props) => {
    return(
        <div className={style.container}>
            <li>{props.message}</li>
        </div>
    )
}

export default MessagesItem;