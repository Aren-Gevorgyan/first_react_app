import React from 'react';
import LoginForm from './login/Login';
import {connect} from 'react-redux';

class LoginContainer extends React.Component{
          
      render(){
          return <LoginForm {...this.props}/>
      }
}

export default connect()(LoginContainer);