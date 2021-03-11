import {addPost, upgradePostText, profileData} from "../../store/reduce/profileReduce";
import Profile from './profile/Profile';
import {connect} from 'react-redux';
import React from 'react';
import * as axios from 'axios';
import { withRouter } from "react-router";
import Loading from '../common/loading/Loading';
import {profileApi} from '../../dal/api';

class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId =  this.props.match.params.userId;
        profileApi.getProfile(!userId? this.props.userId : userId)
             .then(data => {
              this.props.profileData(data);
        })
    }

    render(){
        return !this.props.profile? <Loading/> : 
               <Profile  {...this.props}/>      
    }
}

const mapStateToProps=(state)=>{
    return {
         arrayPosts: state.profilePage.arrayPosts,
         newPostText: state.profilePage.newPostText,
         profile: state.profilePage.profile,
         fullName: state.profilePage.fullName,
         userId: state.auth.id,
         ifAuth: state.auth.ifAuth,
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

const WithRProfileComponent = withRouter(ProfileContainer);
 
export default connect(mapStateToProps, {addPost, upgradePostText, profileData})(WithRProfileComponent);