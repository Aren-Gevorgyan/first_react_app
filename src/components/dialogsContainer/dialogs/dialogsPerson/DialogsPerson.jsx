import React from 'react';
import DialogsItem from './dialogsItem/DialogsItem';
import style from './DialogsPerson.module.css';

const DialogsPerson = React.memo((props) => {

    let dialogsItem = props.person
    .map(element => <DialogsItem key={element.id} name={element.name} id={element.id} photo={element.photo}/>)

    return (
        <div className={style.container}>
            <ul>
              {dialogsItem}
            </ul>
        </div>
    )
})

export default DialogsPerson;