import React from 'react';
import style from './Profile.module.css';
import MyPosts from './myPosts/MyPosts';
import DescriptionPerson from './descriptionPerson/DescriptionPerson';

const Profile = ()=>{
   return( 

     <div className={style.container}>
  
        <DescriptionPerson/> 
        <MyPosts/>

     </div> 

   )
}

export default Profile;