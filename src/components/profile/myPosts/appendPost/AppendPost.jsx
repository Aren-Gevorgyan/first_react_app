import React from 'react';
import style from './AppendPost.module.css';

const AppendPosts = (props) => {

    let bindTextarea = React.createRef();

    const setPost = () => {
          let value = bindTextarea.current.value;
          props.setPost(value);
          bindTextarea.current.value = "";
    }

    return(
        <div className={style.container}>  

           <div className={style.title}>
              My Posts
           </div>

           <div className={style.createNewPost}>
               <textarea ref={bindTextarea}></textarea>
               <br/>
               <button onClick={setPost}>Add Posts</button>
            </div>

        </div>
     
    )
}

export default AppendPosts;