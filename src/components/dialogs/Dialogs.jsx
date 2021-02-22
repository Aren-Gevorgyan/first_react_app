import React from 'react';
import style from './Dialogs.module.css';
import DialogsPerson from './dialogsPerson/DialogsPerson';
import Messages from './messages/Messages';

const Dialogs = (props) => {

    return(
        <div className={style.container}>
          <DialogsPerson person={props.dialogPage.arrayPerson}/>
          <Messages
            messages={props.dialogPage.arrayMessages}
            setMessage={props.setMessage}
            setNewMessageText={props.setNewMessageText}
            newMessageText={props.dialogPage.newMessageText}/>
        </div>
    )
}

export default Dialogs;