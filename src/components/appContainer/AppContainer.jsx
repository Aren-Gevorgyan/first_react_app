import React from "react";
import { connect } from "react-redux";
import App from './app/App';
import {authThunk} from '../../store/reduce/authReduce';

class AppContainer extends React.Component{

    componentDidMount(){
        this.props.authThunk();
    }

    render(){
        return <App {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
       ifAuth: state.auth.ifAuth,
    }
}

export default connect(mapStateToProps, {authThunk})(AppContainer);