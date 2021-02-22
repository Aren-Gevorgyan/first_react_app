import React from 'react';
import style from './Profile.module.css';
import MyPosts from './myPosts/MyPosts';
import DescriptionPerson from './descriptionPerson/DescriptionPerson';

const Profile = (props)=>{
   return( 

     <div className={style.container}>
  
        <DescriptionPerson/> 
        <MyPosts state={props.profilePage} setPost={props.setPost}/>

     </div> 

   )
}

export default Profile;