import React from 'react';
import style from './LoginForm.module.css';
import { Field, reduxForm } from 'redux-form';
import { notNull, getMaxTextSize} from '../../../../utils/validate/validate';
import {Input} from '../../../../utils/formType/FormType';

const maxTextSize = getMaxTextSize(25);  

const Form = (props) => {

    const ifError = props.error? style.error: "";
    console.log(props);
    
    return (
        <div  className={style.container}>
          <form onSubmit={props.handleSubmit}>
              
               <div className={style.login}>
                   <label htmlFor="login">Login</label>
                   <Field id="login" component={Input} type="text" 
                          name="login" placeholder="login"
                          className={ifError} validate={[notNull, maxTextSize]}/>
               </div>

               <div className={style.login}>
                   <label htmlFor="password">Password</label>
                   <Field id="password" component={Input}
                          type="password" name="password"
                          placeholder="password" className={ifError}
                          validate={[notNull, maxTextSize]}/>
               </div>

               <div className={style.checkbox}>
                   <label htmlFor="checkbox">Remember my</label>
                   <Field id="checkbox" component="input" type="checkbox" name="rememberMe"/>
               </div>

               <span className={style.errorMessage}> {props.error? props.error : ""} </span>

               <div className={style.submit}>
                   <button type="submit"> Submit </button>
               </div>

          </form>
       </div>
    )
}

const LoginForm = reduxForm({form: "login"})(Form);

export default LoginForm;