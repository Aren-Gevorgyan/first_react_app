import React from 'react';
import style from './Profile.module.css';
import MyPosts from './myPosts/MyPosts';
import DescriptionPerson from './descriptionPerson/DescriptionPerson';

const Profile = (props)=>{
   
   return( 

     <div className={style.container}>
  
        <DescriptionPerson/> 
        <MyPosts 
        arrayPosts={props.profilePage.arrayPosts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}/>

     </div> 

   )
}

export default Profile;