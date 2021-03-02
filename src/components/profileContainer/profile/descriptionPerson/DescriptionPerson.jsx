import React from 'react';
import style from './DescriptionPerson.module.css';

const DescriptionPerson = (props)=>{
   return( 

     <div className={style.container}>
  
       <img src="https://www.incimages.com/uploaded_files/image/1920x1080/westworld-2-hbo-background-1920_419617.jpg" alt="cover photo"/>

        <div className={style.description}>
           avatar + description
        </div>

     </div> 

   )
}

export default DescriptionPerson;