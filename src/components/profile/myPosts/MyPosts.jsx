import React from 'react';
import style from './MyPosts.module.css';
import Posts from './posts/Posts';

const MyPosts = (props) => {
    return(
        <div>  
         <div>
            My Posts
         </div>

         <div className={style.createNewPost}>
           <textarea></textarea>
           <button>Add Posts</button>
         </div>
         <Posts post = 'My first post' like = '5'/>
         <Posts post = 'My second post' like = '2'/>
     </div>
     
    )
}

export default MyPosts;