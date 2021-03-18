import React from 'react';
import style from './Login.module.css';
import LoginForm from './loginForm/LoginForm';

const Login = (props) => {
    
    const submit = (valuesForm) => {
        console.log(valuesForm.login, valuesForm.password, valuesForm.rememberMe)
        props.loginThunk(valuesForm.login, valuesForm.password, valuesForm.rememberMe);
    }

    return (
        <div className={style.container}>
           <h1 className={style.title}>Login</h1>
           <LoginForm onSubmit={submit}/>
        </div>
    )
}

export default Login;