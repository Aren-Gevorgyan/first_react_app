import React from "react";
import { connect } from "react-redux";
import App from './app/App';
import {setAuthData} from '../../store/reduce/authReduce';
import Loading from "../common/loading/Loading";
import {authApi} from '../../dal/api';

class AppContainer extends React.Component{

    componentDidMount(){
        authApi.auth().then(data => {
             if(data.resultCode === 0){
                this.props.setAuthData(data.data);
             }
        })
    }

    render(){
       
        return this.props.ifAuth?  <App {...this.props}/> : <Loading/>
    }
}

const mapStateToProps = (state) => {

    return {
           userId: state.auth.id,
           ifAuth: state.auth.ifAuth,
      }
}

export default connect(mapStateToProps, {setAuthData})(AppContainer);