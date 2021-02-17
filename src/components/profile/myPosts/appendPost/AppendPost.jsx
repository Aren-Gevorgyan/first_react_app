import React from 'react';
import style from './AppendPost.module.css';

const AppendPosts = (props) => {
    return(
        <div className={style.container}>  

           <div className={style.title}>
              My Posts
           </div>

           <div className={style.createNewPost}>
               <textarea></textarea>
               <br/>
               <button>Add Posts</button>
            </div>

        </div>
     
    )
}

export default AppendPosts;