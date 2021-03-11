import React from "react";
import { connect } from "react-redux";
import Header from "./header/Header";
import * as axios from 'axios';
import Loading from "../common/loading/Loading";
import {authProfileData} from '../../store/reduce/headerReduce';

class HeaderContainer extends React.Component{

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`, {withCredentials: true})
                    .then(response => {
                        this.props.authProfileData(response.data);        
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