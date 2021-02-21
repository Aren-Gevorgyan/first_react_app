import React from 'react';
import style from './SetMessages.module.css';

const SetMessages = () => {
    return(
        <div className={style.container}>
           <textarea></textarea>
           <button>Add Messages</button>    
        </div>
    )
}

export default SetMessages;