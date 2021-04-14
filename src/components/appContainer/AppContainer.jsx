import React from "react";
import { connect } from "react-redux";
import App from './app/App';
import {authThunk} from '../../store/reduce/authReduce';
import Loading from "../common/loading/Loading";

class AppContainer extends React.Component{
    componentDidMount(){
        this.props.authThunk();
    }
    render(){ 
        return this.props.ifAuth? <App {...this.props}/> : <Loading/>
    }
}

const mapStateToProps = (state) => {
    return {
       ifAuth: state.auth.ifAuth,
    }
}

export default connect(mapStateToProps, {authThunk})(AppContainer);