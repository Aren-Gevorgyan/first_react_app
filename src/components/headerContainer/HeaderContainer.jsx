import React from "react";
import { connect } from "react-redux";
import Header from "./header/Header";
import Loading from "../common/loading/Loading";
import {authProfileThunk} from '../../store/reduce/headerReduce';

class HeaderContainer extends React.Component{

    componentDidMount(){
            this.props.authProfileThunk(this.props.userId);
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

export default connect(mapStateToProps, {authProfileThunk})(HeaderContainer);