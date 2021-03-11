import React from "react";
import { connect } from "react-redux";
import Header from "./header/Header";
import * as axios from 'axios';
import Loading from "../common/loading/Loading";
import {authProfileData} from '../../store/reduce/headerReduce';
import {profileApi} from '../../dal/api';

class HeaderContainer extends React.Component{

    componentDidMount(){
            profileApi.getProfile(this.props.userId)
                    .then(data => {
                        this.props.authProfileData(data);        
                    })
    }

    render(){
        return !this.props.profile? <Loading/> : < Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
   return {
       profile: state.header.headerProfileData,
       userId: state.auth.id,
   }
}

export default connect(mapStateToProps, {authProfileData})(HeaderContainer);