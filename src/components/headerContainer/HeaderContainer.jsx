import React, {PureComponent} from "react";
import { connect } from "react-redux";
import Header from "./header/Header";
import {logoutThunk} from '../../store/reduce/authReduce';

//PureComponent wear props in case of change
class HeaderContainer extends PureComponent{
    
    render(){
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state) => {
   return {
       profile: state.auth.headerProfileData,
       ifAuth : state.auth.ifAuth,
   }
}

export default connect(mapStateToProps, {logoutThunk})(HeaderContainer);