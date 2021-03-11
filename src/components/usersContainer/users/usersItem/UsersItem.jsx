import React from 'react';
import style from './UsersItem.module.css';
import defaultAvatar from '.././../../../assets/images/default_avatar.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

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
                       axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                             withCredentials: true,
                             headers: {"API-KEY" : "0e0c695e-f307-4053-b6f2-d2bee079a661"}
                             })
                              .then(response => {
                                if(response.data.resultCode === 0){
                                   props.following(!props.follow, props.id);
                              }
                       })
                       :
                       axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                             withCredentials: true,
                             headers: {"API-KEY" : "0e0c695e-f307-4053-b6f2-d2bee079a661"}
                             })
                               .then(response => {
                                  if(response.data.resultCode === 0){
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