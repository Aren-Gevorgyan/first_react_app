import React from 'react';
import style from './Header.module.css';
import defaultAvatar from '../../../assets/images/default_avatar.png';

const Header = (props)=>{
   
   let userPhoto;

   const ifPhotoEmpty = () => {
      if(props.profile.photos.large){
         userPhoto =  props.profile.photos.large
      }else{
         userPhoto = defaultAvatar
      }
   }
   
   const ifProfileEmpty = (() => {
      if(props.profile){
         ifPhotoEmpty();
      }else{
         userPhoto = defaultAvatar;  
      } 
   })();
   
   return( 
      <header>
         
          <img src="https://www.pngitem.com/pimgs/m/98-980820_all-natural-100-vg-logo-hoja-hd-png.png" alt="logo"/>

          <div className={style.userData}>
             <img src={userPhoto} alt="userPhoto"/>
             <h2>{!props.profile? "login" : props.profile.fullName}</h2>
          </div>

      </header>
   )
}

export default Header;