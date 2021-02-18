import React from 'react';
import style from './MyPosts.module.css';
import Posts from './posts/Posts';
import AppendPost from './appendPost/AppendPost';

const MyPosts = (props) => {

    let post = props.props
    .map(element =>  <Posts post={element.post} like={element.like}/>)
    
    return(
        <div>

          <AppendPost/>

          {post}

        </div>
     
    )
}

export default MyPosts;