import React from 'react';
import style from './EditDescriptionData.module.css';
import { Field, reduxForm } from 'redux-form';

const Form = ({handleSubmit, setEdit, edit}) => {

   return( 
        <form onSubmit={handleSubmit} className={style.container}>
            
            <div>
                <label>About My
                    <div>
                       <Field name="aboutMy" placeholder={"about my"} component='textarea'/>
                    </div>
                </label>
            </div>

            <div>
                <label>
                    Looking for a job
                    <Field name="lookingForAJob" placeholder={"Looking for a job"} type="checkbox" component='input'/>
                </label>
            </div>

            <div>
                <label>Looking for a job description
                    <div>
                       <Field name="LookingForAJobDescription" placeholder={"Looking for a job description"} component='textarea'/>
                    </div>
                </label>
            </div>

            <button type='submit' onClick={()=>{setEdit(!edit)}}>Save</button>
        </form>
   )
}

const EditDescriptionData = reduxForm({form: "edit_description"})(Form);
export default  EditDescriptionData;