import { connect } from "react-redux";
import React from 'react';
import {Redirect} from 'react-router-dom';

const mapStateToProps = (state) => {
       return {
            ifAuth: state.auth.ifAuth,
       }
}

const withRedirect = (Component) => {


    class WithRedirectContainer extends React.Component {
        render(){
            return this.props.ifAuth? <Component {...this.props}/> : <Redirect to='/login'/>                   
        }
    }

    return connect(mapStateToProps)(WithRedirectContainer);
}

export default withRedirect;