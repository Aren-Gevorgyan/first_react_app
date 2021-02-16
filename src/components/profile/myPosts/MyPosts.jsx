import React from 'react';
import style from './MyPosts.module.css';
import Posts from './posts/Posts';

const MyPosts = (props) => {
    alert(props)
    return(
        <div>  
         <div>
            My Posts
         </div>

         <div className={style.createNewPost}>
           <textarea></textarea>
           <button>Add Posts</button>
         </div>
         <Posts/>
     </div>
     
    )
}

export default MyPosts;