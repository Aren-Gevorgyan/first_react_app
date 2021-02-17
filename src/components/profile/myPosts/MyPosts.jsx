import React from 'react';
import style from './MyPosts.module.css';
import Posts from './posts/Posts';
import AppendPost from './appendPost/AppendPost';

const MyPosts = (props) => {
    return(
        <div>

          <AppendPost/>

          <Posts post = 'My first post' like = '5'/>
          <Posts post = 'My second post' like = '2'/>
          
        </div>
     
    )
}

export default MyPosts;