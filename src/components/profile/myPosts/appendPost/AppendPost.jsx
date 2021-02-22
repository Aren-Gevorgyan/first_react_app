import React from 'react';
import style from './AppendPost.module.css';

const AppendPosts = (props) => {

    let bindTextarea = React.createRef();

    const setPost = () => {
          props.setPost();
    }

    const getPresentValue = () => {
        let value = bindTextarea.current.value;
        props.setNewPostText(value);
    }

    return(
        <div className={style.container}>  

           <div className={style.title}>
              My Posts
           </div>

           <div className={style.createNewPost}>
               <textarea onChange={getPresentValue} ref={bindTextarea} value={props.newPostText}/>
               <br/>
               <button onClick={setPost}>Add Posts</button>
            </div>

        </div>   
    )
}

export default AppendPosts;