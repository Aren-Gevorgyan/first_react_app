import React from 'react';
import style from './LoginForm.module.css';
import { Field, reduxForm } from 'redux-form';

const Form = (props) => {
    
    return (
        <div  className={style.container}>
          <form onSubmit={props.handleSubmit}>
              
               <div className={style.login}>
                   <label htmlFor="login">Login</label>
                   <Form id="login" component="input" type="text" name="login" placeholder="login"/>
               </div>

               <div className={style.login}>
                   <label htmlFor="password">Password</label>
                   <Form id="password" component="input" type="password" name="password" placeholder="password"/>
               </div>

               <div className={style.checkbox}>
                   <label htmlFor="checkbox">Remember my</label>
                   <Form id="checkbox" component="input" type="checkbox" name="rememberMe"/>
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