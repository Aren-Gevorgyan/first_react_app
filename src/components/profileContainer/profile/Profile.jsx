import React from 'react';
import style from './Profile.module.css';
import MyPosts from './myPosts/MyPosts';
import DescriptionPerson from './descriptionPerson/DescriptionPerson';

const Profile = (props)=>{
   
   return( 

     <div className={style.container}>
  
        <DescriptionPerson/> 
        <MyPosts
          arrayPosts={props.arrayPosts}
          newPostText={props.newPostText}
          addPost={props.addPost}
          upgradePostText={props.upgradePostText}/>

     </div> 

   )
}

export default Profile;