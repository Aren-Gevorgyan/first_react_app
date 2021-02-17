import React from 'react';
import DialogsItem from './dialogsItem/DialogsItem';
import style from './DialogsPerson.module.css';

const DialogsPerson = (props) => {
    return (
        <div className={style.container}>
            <ul>
              <DialogsItem name='Armen' id = '1'/>
              <DialogsItem name='Hovo' id = '2'/>
              <DialogsItem name='Dima' id = '3'/>
              <DialogsItem name='Aren' id = '4'/>
              <DialogsItem name='Arman' id = '5'/>
            </ul>
        </div>
    )
}

export default DialogsPerson;