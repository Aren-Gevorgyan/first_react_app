import React from 'react';
import { Field } from 'redux-form';
import style from './ReduxForm.module.css';
import {notNull, getMaxTextSize} from '../../../utils/validate/validate';
import {Textarea} from '../../../utils/formType/FormType';

const textSize = getMaxTextSize(30);

const ReduxForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={style.container}> 
          <Field name="messages" component={Textarea} validate={[notNull, textSize]}/>
          <button type="status">Append</button>   
        </form>
    )
}

export default ReduxForm;
