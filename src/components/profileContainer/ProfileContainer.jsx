import {addPost, upgradePostText, getProfileThunk} from "../../store/reduce/profileReduce";
import Profile from './profile/Profile';
import {connect} from 'react-redux';
import React from 'react';
import { withRouter } from "react-router";
import Loading from '../common/loading/Loading';
import {Redirect} from 'react-router-dom';

class ProfileContainer extends React.Component{

    componentDidMount(){
        let userId =  this.props.match.params.userId;
        this.props.getProfileThunk(userId, this.props.userId)
    }

    render(){
        return this.props.ifAuth?  
        !this.props.profile? <Loading/> : 
               <Profile  {...this.props}/>
               :
               <Redirect to='/login'/>      
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
 
export default connect(mapStateToProps, {addPost, upgradePostText, getProfileThunk})(WithRProfileComponent);