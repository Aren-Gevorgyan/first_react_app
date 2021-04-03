import React from 'react';
import { reduxForm } from 'redux-form';
import style from './SetMessages.module.css';
import ReduxForm from '../../../../common/oneForm/ReduxForm';

const WriteMessages = reduxForm({form: "messages"})(ReduxForm);

const SetMessages = (props) => {

    const setNewMessages = (messagesText) => {
        props.addMessages(messagesText.messages);           
    }
    
    return(
        <div className={style.container}>
           <WriteMessages onSubmit={setNewMessages}/>  
        </div>
    )
}

export default SetMessages;