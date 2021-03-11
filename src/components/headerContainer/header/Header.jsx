import React from 'react';
import style from './Header.module.css';
import defaultAvatar from '../../../assets/images/default_avatar.png';

const Header = (props)=>{
   return( 
      <header>
         
          <img src="https://www.pngitem.com/pimgs/m/98-980820_all-natural-100-vg-logo-hoja-hd-png.png" alt="logo"/>

          <div className={style.userData}>
             <img src={!props.profile.photos.large? defaultAvatar: props.profile.photos.large} alt="userPhoto"/>
             <h2>{props.profile.fullName}</h2>
          </div>

      </header>
   )
}

export default Header;