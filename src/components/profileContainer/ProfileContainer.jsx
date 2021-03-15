import {addPost, upgradePostText, getProfileThunk} from "../../store/reduce/profileReduce";
import Profile from './profile/Profile';
import {connect} from 'react-redux';
import React from 'react';
import { withRouter } from "react-router";
import Loading from '../common/loading/Loading';
import withRedirect from '../hoc/withRedirect';
import { compose } from "redux";

class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId =  this.props.match.params.userId;
        this.props.getProfileThunk(userId, this.props.userId)
    }

    render(){
        return this.props.profile? <Profile  {...this.props}/> : <Loading/>               
    }
}

const mapStateToProps=(state)=>{
    return {
         arrayPosts: state.profilePage.arrayPosts,
         newPostText: state.profilePage.newPostText,
         profile: state.profilePage.profile,
         fullName: state.profilePage.fullName,
         userId: state.auth.id,
    }
}

// const mapDispatchToProps=(dispatch)=>{
//     return {
//         addPost: () => {
//             dispatch(createActionAddPost())
//         },
//         upgradePostText: (text) => {
//             dispatch(createActionSetPostText(text))
//         },
//     }
// }
 
export default compose(
    connect(mapStateToProps, {addPost, upgradePostText, getProfileThunk}),
    withRouter,
    withRedirect)(ProfileContainer);