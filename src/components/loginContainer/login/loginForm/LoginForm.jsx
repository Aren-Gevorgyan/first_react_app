import React from 'react';
import style from './LoginForm.module.css';
import { Field, reduxForm } from 'redux-form';

const Form = (props) => {
    
    return (
        <div  className={style.container}>
          <form onSubmit={props.handleSubmit}>
              
               <div className={style.login}>
                   <label for="login">Login</label>
                   <Field id="login" component="input" type="text" name="login" placeholder="login"/>
               </div>

               <div className={style.login}>
                   <label for="password">Password</label>
                   <Field id="password" component="input" type="password" name="password" placeholder="password"/>
               </div>

               <div className={style.checkbox}>
                   <label for="checkbox">Remember my</label>
                   <Field id="checkbox" component="input" type="checkbox" name="rememberMy"/>
               </div>

               <div className={style.submit}>
                   <button type="submit"> Submit </button>
               </div>

          </form>
       </div>
    )
}

const LoginForm = reduxForm({form: "login"})(Form);

export default LoginForm;