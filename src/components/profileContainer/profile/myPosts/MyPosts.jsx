import React from 'react';
import style from './MyPosts.module.css';
import Posts from './posts/Posts';
import AppendPost from './appendPost/AppendPost';

//React.memo wear props in case of change
const MyPosts = React.memo((props) => {

    let post = props.arrayPosts
    .map(element =>  <Posts key={element.id} post={element.post} like={element.like}/>)

    return(
        <div>

          <AppendPost        
            addPost={props.addPost}/>

          {post}

        </div>
     
    )
})

export default MyPosts;