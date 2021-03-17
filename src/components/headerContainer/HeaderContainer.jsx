import React from "react";
import { connect } from "react-redux";
import Header from "./header/Header";
import {authThunk} from '../../store/reduce/authReduce';

class HeaderContainer extends React.Component{

    render(){
        return < Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
   return {
       profile: state.header.headerProfileData,
   }
}

export default connect(mapStateToProps, {authThunk})(HeaderContainer);