import React from 'react';
import style from './DescriptionPerson.module.css';
import defaultAvatar from '../../../../assets/images/default_avatar.png';
import MyStatus from './myStatus/MyStatus';

const DescriptionPerson = (props)=>{

   return( 

     <div className={style.container}>
  
       <img src="https://www.incimages.com/uploaded_files/image/1920x1080/westworld-2-hbo-background-1920_419617.jpg" 
            className={style.coverPhoto}
            alt="cover photo"/>

        <div className={style.description}>

           <img src={!props.profile.photos.large? defaultAvatar:props.profile.photos.large} className={style.avatar} alt="avatar"/>
           
           <div className={style.aboutMy}>
              <h2>{props.profile.fullName}</h2>
              <dl>
                 <dt>Contacts</dt>
                 <dd>{props.profile.contacts.facebook}</dd>
                 <dd>{props.profile.contacts.github}</dd>
                 <dd>{props.profile.contacts.vk}</dd>
              </dl>
           </div>
        </div>

        <MyStatus status={props.status} upgradeStatus={props.upgradeStatus}/>

     </div> 

   )
}

export default DescriptionPerson;