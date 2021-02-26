import React from 'react';
import style from './AppendPost.module.css';
import {createActionAddPost, createActionSetPostText} from "../../../../store/store";
console.log(createActionSetPostText())
const AppendPosts = (props) => {

    let bindTextarea = React.createRef();

    const setPost = () => {
          props.dispatch(createActionAddPost());
    }

    const getPresentValue = () => {
        let newText = bindTextarea.current.value;
        props.dispatch(createActionSetPostText(newText));
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