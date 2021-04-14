import React from "react";
import { connect } from "react-redux";
import Header from "./header/Header";
import {logoutThunk} from '../../store/reduce/authReduce';

class HeaderContainer extends React.Component{

    render(){
        return < Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
   return {
       profile: state.auth.headerProfileData,
   }
}

export default connect(mapStateToProps, {logoutThunk})(HeaderContainer);