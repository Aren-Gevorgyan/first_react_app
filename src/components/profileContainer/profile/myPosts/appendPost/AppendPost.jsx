import React from 'react';
import style from './AppendPost.module.css';
import {Field, reduxForm} from 'redux-form';

const ReduxForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit} className={style.createNewPost}>
               <Field component="textarea" name="newPost" placeholder="write post"/>
               <div>
                  <button type="submit">Add Posts</button>
               </div>
            </form>
    )
}

const CreatePosts = reduxForm({form: "post"})(ReduxForm); 

const AppendPosts = (props) => {

    const addNewPost = (postValue) => {
        props.addPost(postValue.newPost);
    }

    return(
        <div className={style.container}>  

           <div className={style.title}>
              My Posts
           </div>

           <CreatePosts onSubmit={addNewPost}/>
        </div>   
    )
}

export default AppendPosts;