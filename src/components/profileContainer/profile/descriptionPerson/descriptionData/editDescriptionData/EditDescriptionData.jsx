import React from 'react';
import style from './EditDescriptionData.module.css';
import { Field, reduxForm } from 'redux-form';

const Form = ({handleSubmit}) => {

   return( 
        <form onSubmit={handleSubmit} className={style.container}>
            
            <div className={style.containerInput}>
                <label>About Me
                    <div>
                       <Field name="aboutMe" placeholder={"about me"} component='textarea'/>
                    </div>
                </label>
            </div>

            <div className={style.containerInput}>
                <label>Full Name
                    <div>
                       <Field name="fullName" placeholder={"full name"} component='input'/>
                    </div>
                </label>
            </div>

            <div className={style.containerInput}>
                <label>Looking for a job
                    <Field name="lookingForAJob" placeholder={"Looking for a job"} type="checkbox" component='input'/>
                </label>
            </div>

            <div className={style.containerInput}>
                <label>Looking for a job description
                    <div>
                       <Field name="lookingForAJobDescription" placeholder={"Looking for a job description"} component='textarea'/>
                    </div>
                </label>
            </div>

            <button type='submit'>Save</button>
        </form>
   )
}

const EditDescriptionData = reduxForm({form: "edit_description"})(Form);
export default  EditDescriptionData;