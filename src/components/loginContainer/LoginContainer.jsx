import React from 'react';
import Login from './login/Login';
import {connect} from 'react-redux';

class LoginContainer extends React.Component{
          
      render(){
          return <Login {...this.props}/>
      }
}

export default connect()(LoginContainer);