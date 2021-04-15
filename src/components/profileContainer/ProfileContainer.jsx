import Profile from './profile/Profile';
import {connect} from 'react-redux';
import React, {Component} from 'react';
import { withRouter } from "react-router";
import Loading from '../common/loading/Loading';
import withRedirect from '../hoc/withRedirect';
import { compose } from "redux";
import {addPost, getProfileThunk,
        getStatusThunk, setStatusThunk, upgradePhoto} from "../../store/reduce/profileReduce";
import { getPosts, getProfile, getFullName, getUserId, getStatus} from '../../store/reduce/profile_selector';

class ProfileContainer extends React.Component{

    getProfile(){
        let userId =  this.props.match.params.userId;
        this.props.getProfileThunk(userId, this.props.userId);
        this.props.getStatusThunk(userId, this.props.userId);
    }

    componentDidMount(){
       this.getProfile();
    }

    componentDidUpdate(prevProps, prevState){
      
        if(prevProps.match.params.userId !== this.props.match.params.userId){
          this.getProfile();
        }
    }

    render(){
        return !this.props.profile?  <Loading/>  :  <Profile  {...this.props} pathUserId={this.props.match.params.userId}/>         
    }
}

const mapStateToProps=(state)=>{
    return {
         arrayPosts: getPosts(state),
         profile: getProfile(state),
         fullName: getFullName(state),
         userId: getUserId(state),
         status: getStatus(state),
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
    connect(mapStateToProps, {addPost, getProfileThunk, getStatusThunk, setStatusThunk, upgradePhoto}),
    withRouter,
    withRedirect)(ProfileContainer);