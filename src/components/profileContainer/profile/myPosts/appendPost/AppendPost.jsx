import React from 'react';
import style from './AppendPost.module.css';
import {Field, reduxForm} from 'redux-form';
import ReduxForm from '../../../../common/oneInput/ReduxForm';

const CreatePosts = reduxForm({form: "post"})(ReduxForm); 

const AppendPosts = React.memo((props) => {

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
})

export default AppendPosts;