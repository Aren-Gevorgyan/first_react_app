import React from 'react';
import style from './UsersItem.module.css';
import defaultAvatar from '.././../../../assets/images/default_avatar.png';
import { NavLink } from 'react-router-dom';
import {followApi} from '../../../../dal/api';

const UsersItem = (props) => {
    
    return (
         <div className={style.container}>

            <div className={style.usersContainer}> 

              <div className={style.avatar}>

                 <NavLink to={`/profile/${props.id}`}><img src={!props.photo ? defaultAvatar : props.photo}/></NavLink>

              </div> 

              <div className={style.description}>

                 <div className={style.descTop}>
                    <p>{props.name}</p>
                    <p>?</p>
                 </div>

                 <div className={style.descFooter}>
                    <p>{props.status}</p>
                    <p>?</p>
                 </div>

              </div>

            </div>
            
            <button onClick={()=>{
               
                       props.follow ? 
                       
                       followApi.followDelete(props.id).then(data => {
                                if(data.resultCode === 0){
                                   props.following(!props.follow, props.id);
                              }
                       })
                       :
                       followApi.followed(props.id).then(data => {
                                  if(data.resultCode === 0){
                                      props.following(!props.follow, props.id);
                                  }
                               })                     

                     }}

               className={style.follow}>
               {props.follow ? "Follow" : "Unfollow"}

            </button>

         </div>   
    )
}

export default UsersItem;