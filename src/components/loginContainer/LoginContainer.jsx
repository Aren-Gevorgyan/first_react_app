import React from 'react';
import LoginForm from './login/Login';
import {connect} from 'react-redux';
import {loginThunk} from '../../store/reduce/authReduce';
import { Redirect } from "react-router";

class LoginContainer extends React.Component{
          
      render(){
         return this.props.ifAuth?
           <Redirect to={`profile/${this.props.id}`}/>
          : 
           <LoginForm {...this.props}/>
      }
}

const mapStateToProps = (state) => {
      return {
        ifAuth: state.auth.ifAuth,
        id: state.auth.id,      
      }
}

export default connect(mapStateToProps, {loginThunk})(LoginContainer);