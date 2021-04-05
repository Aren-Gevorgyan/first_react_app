import React from 'react';
import style from './FormType.module.css';

export const Textarea = (props) => {

    const ifSubmitFailed = props.meta.submitFailed;

    return (
        <div className={style.container} >
            <textarea {...props.input} {...props} className={ ifSubmitFailed? style.error : {}}/>
            <span>{ifSubmitFailed? props.meta.error : ""}</span>
        </div>
    )
}

// export const Input = (props) => {
//     return <input {...props.input} {...props}/>
// }