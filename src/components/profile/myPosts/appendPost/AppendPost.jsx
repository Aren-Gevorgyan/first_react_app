import React from 'react';
import style from './AppendPost.module.css';

const AppendPosts = (props) => {

    let currentValuePost = React.createRef();

    const setPost = () => {
          let value = currentValuePost.current.value;
    }

    return(
        <div className={style.container}>  

           <div className={style.title}>
              My Posts
           </div>

           <div className={style.createNewPost}>
               <textarea ref={currentValuePost}></textarea>
               <br/>
               <button onClick={setPost}>Add Posts</button>
            </div>

        </div>
     
    )
}

export default AppendPosts;