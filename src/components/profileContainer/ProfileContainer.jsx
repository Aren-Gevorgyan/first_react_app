import React from 'react';
import {createActionAddPost, createActionSetPostText} from "../../store/reduce/profileReduce";
import Profile from './profile/Profile';

const ProfileContainer = (props) => {

    const addPost = () => {
        props.dispatch(createActionAddPost());
    }
    const upgradePostText = (text) => {
        props.dispatch(createActionSetPostText(text))
    }
      
    return( 
        <Profile 
           arrayPosts={props.profilePage.arrayPosts}
           addPost={addPost}
           upgradePostText={upgradePostText}
           newPostText={props.profilePage.newPostText}/>
     
    )
}

export default ProfileContainer;