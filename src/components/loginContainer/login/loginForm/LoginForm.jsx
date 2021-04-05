import React from 'react';
import style from './LoginForm.module.css';
import { Field, reduxForm } from 'redux-form';

const Form = (props) => {
    
    const ifError = props.loginError? style.error: "";

    return (
        <div  className={style.container}>
          <form onSubmit={props.handleSubmit}>
              
               <div className={style.login}>
                   <label htmlFor="login">Login</label>
                   <Field id="login" component="input" type="text" name="login" placeholder="login" className={ifError}/>
               </div>

               <div className={style.login}>
                   <label htmlFor="password">Password</label>
                   <Field id="password" component="input" type="password" name="password" placeholder="password" className={ifError}/>
               </div>

               <div className={style.checkbox}>
                   <label htmlFor="checkbox">Remember my</label>
                   <Field id="checkbox" component="input" type="checkbox" name="rememberMe"/>
               </div>

               <span className={style.errorMessage}> {props.loginError? props.loginError : ""} </span>

               <div className={style.submit}>
                   <button type="submit"> Submit </button>
               </div>

          </form>
       </div>
    )
}

const LoginForm = reduxForm({form: "login"})(Form);

export default LoginForm;