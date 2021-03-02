import React from 'react';
import {createActionAddPost, createActionSetPostText} from "../../../store/reduce/profileReduce";
import MyPosts from './myPosts/MyPosts';

const MyPostsContainer = (props) => {

    const addPost = () => {
        props.dispatch(createActionAddPost());
    }
    const upgradePostText = (text) => {
        props.dispatch(createActionSetPostText(text))
    }
      
    return( 
        <MyPosts 
           arrayPosts={props.arrayPosts}
           addPost={addPost}
           upgradePostText={upgradePostText}
           newPostText={props.newPostText}/>
     
    )
}

export default MyPostsContainer;