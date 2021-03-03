import React from 'react';
import {createActionAddPost, createActionSetPostText} from "../../store/reduce/profileReduce";
import Profile from './profile/Profile';
import {connect} from 'react-redux';

// const ProfileContainer = (props) => {

//     const addPost = () => {
//         props.dispatch(createActionAddPost());
//     }
//     const upgradePostText = (text) => {
//         props.dispatch(createActionSetPostText(text))
//     }
      
//     return( 
//         <Profile 
//            arrayPosts={props.profilePage.arrayPosts}
//            addPost={addPost}
//            upgradePostText={upgradePostText}
//            newPostText={props.profilePage.newPostText}/>
     
//     )
// }

const mapStateToProps=(state)=>{
    return {
         arrayPosts: state.profilePage.arrayPosts,
         newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        addPost: () => {
            dispatch(createActionAddPost())
        },
        upgradePostText: (text) => {
            dispatch(createActionSetPostText(text))
        },
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;