import React from 'react';
import { Field } from 'redux-form';
import style from './ReduxForm.module.css';

const ReduxForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={style.container}> 
          <Field name="messages" component="textarea"/>
          <button type="status">Append</button>   
        </form>
    )
}

export default ReduxForm;
