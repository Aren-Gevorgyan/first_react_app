import React from "react";
import { connect } from "react-redux";
import Header from "./header/Header";
import Loading from "../common/loading/Loading";
import {authThunk} from '../../store/reduce/authReduce';

class HeaderContainer extends React.Component{

    componentDidMount(){
            this.props.authThunk();
    }

    render(){
        return < Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
   return {
       profile: state.header.headerProfileData,
       userId: state.auth.id,
   }
}

export default connect(mapStateToProps, {authThunk})(HeaderContainer);