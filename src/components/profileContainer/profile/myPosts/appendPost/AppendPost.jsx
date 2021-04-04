import React from 'react';
import style from './AppendPost.module.css';
import {Field, reduxForm} from 'redux-form';
// import {notNull, getMaxTextSize} from '../../../../../utils/validate/validate';
// import { Textarea } from '../../../../../utils/formType/FormType';
import ReduxForm from '../../../../common/oneInput/ReduxForm';

// const textSize = getMaxTextSize(30);

// const ReduxForm = (props) => {
//     return (
//             <form onSubmit={props.handleSubmit} className={style.createNewPost}>
//                <Field component={Textarea} name="newPost" placeholder="write post" validate={[notNull, textSize]}/>
//                <div>
//                   <button type="submit">Add Posts</button>
//                </div>
//             </form>
//     )
// }

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