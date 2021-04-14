import React from 'react';
import style from './DescriptionPerson.module.css';
import defaultAvatar from '../../../../assets/images/default_avatar.png';
import MyStatus from './myStatus/MyStatus';

const DescriptionPerson = React.memo(({profile, status, upgradeStatus, upgradePhoto, pathUserId, userId})=>{

   const getPhotoPath = (e) => {
        upgradePhoto(e.target.files[0]);
   }

   const ifMyProfile = parseInt(pathUserId) === userId || pathUserId === undefined;

   return( 

     <div className={style.container}>
  
       <img src="https://www.incimages.com/uploaded_files/image/1920x1080/westworld-2-hbo-background-1920_419617.jpg" 
            className={style.coverPhoto}
            alt="cover photo"/>

        <div className={style.description}>

           <img src={!profile.photos.large? defaultAvatar:profile.photos.large} className={style.avatar} alt="avatar"/>
           
           <div className={style.aboutMy}>
              <h2>{profile.fullName}</h2>
              <dl>
                 <dt>Contacts</dt>
                 <dd>{profile.contacts.facebook}</dd>
                 <dd>{profile.contacts.github}</dd>
                 <dd>{profile.contacts.vk}</dd>
              </dl>
           </div>
        </div>

        <div className="setPhoto">
           {ifMyProfile? <input type="file" onChange={getPhotoPath}/>: " "}
        </div>

        <MyStatus status={status} upgradeStatus={upgradeStatus}/>

     </div> 

   )
})

export default DescriptionPerson;