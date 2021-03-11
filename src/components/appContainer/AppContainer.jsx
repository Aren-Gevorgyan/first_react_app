import React from "react";
import { connect } from "react-redux";
import App from './app/App';
import * as axios from 'axios';
import {setAuthData} from '../../store/reduce/authReduce';
import Loading from "../common/loading/Loading";

class AppContainer extends React.Component{

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true})
             .then(response => {

             if(response.data.resultCode === 0){
                this.props.setAuthData(response.data.data);
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