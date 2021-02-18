import React from 'react';
import DialogsItem from './dialogsItem/DialogsItem';
import style from './DialogsPerson.module.css';

const DialogsPerson = (props) => {

    let dialogsItem = props.person
    .map(element => <DialogsItem name={element.name} id={element.id}/>)

    return (
        <div className={style.container}>
            <ul>
              {dialogsItem}
            </ul>
        </div>
    )
}

export default DialogsPerson;