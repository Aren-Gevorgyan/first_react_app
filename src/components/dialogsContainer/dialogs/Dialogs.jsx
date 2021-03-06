import React from 'react';
import style from './Dialogs.module.css';
import DialogsPerson from './dialogsPerson/DialogsPerson';
import Messages from './messages/Messages';

const Dialogs = (props) => {
    return(
        <div className={style.container}>
          <DialogsPerson person={props.arrayPerson}/>
          <Messages
            arrayMessages={props.arrayMessages}
            addMessages={props.addMessages}/>
        </div>
    )
}

export default Dialogs;