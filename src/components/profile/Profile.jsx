import React from 'react';
import style from './Profile.module.css';
import MyPosts from './myPosts/MyPosts';


const Profile = ()=>{
   return( 

     <div className={style.main_content}>
  
       <img src="https://www.incimages.com/uploaded_files/image/1920x1080/westworld-2-hbo-background-1920_419617.jpg" alt="cover photo"/>

        <div>
           avatar + description
        </div>

        <MyPosts/>
     </div> 

   )
}

export default Profile;