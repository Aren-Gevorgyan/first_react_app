import React from 'react';
import style from './Header.module.css';
import defaultAvatar from '../../../assets/images/default_avatar.png';
import Dialog from './dialog/Dialog';

const Header = (props) => {
   debugger

   const ifPhotoEmpty = (props) => {
      if(props.profile.photos.large){
         return props.profile.photos.large
      }else{
         return defaultAvatar
      }
   }
   
   const userPhoto = ((props) => {
      if(props.profile){
         return ifPhotoEmpty(props);
      }else{
         return defaultAvatar;  
      } 
   })(props);

   return( 
         <header>
            
             <img src="https://www.pngitem.com/pimgs/m/98-980820_all-natural-100-vg-logo-hoja-hd-png.png" alt="logo"/>
   
             <div className={style.userData}>
                <img src={userPhoto} alt="userPhoto"/>
                <Dialog  profile={props.profile} logout={props.logoutThunk}/>
             </div>
   
         </header>
   )
   
}

export default Header;