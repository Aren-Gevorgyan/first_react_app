import React from 'react';
import style from './Dialogs.module.css';
import DialogsPerson from './dialogsPerson/DialogsPerson';
import Messages from './messages/Messages';

const Dialogs = (props) => {

    return(
        <div className={style.container}>
          <DialogsPerson person={props.state.arrayPerson}/>
          <Messages messages={props.state.arrayMessages}/>
        </div>
    )
}

export default Dialogs;