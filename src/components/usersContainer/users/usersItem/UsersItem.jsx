import React from 'react';
import style from './UsersItem.module.css';
import defaultAvatar from '.././../../../assets/images/default_avatar.png';
import { NavLink } from 'react-router-dom';

const UsersItem = (props) => {
   console.log(props)

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
                       if(props.follow) {
                       
                        //  props.setFollowDisabled(true, props.id);                            
                        //  followApi.followDelete(props.id).then(data => {
                        //         if(data.resultCode === 0){
                        //            props.following(!props.follow, props.id);
                        //            props.setFollowDisabled(false, props.id);                            
                        //       }
                        //  })
                        props.unFollowThunk(props.id, props.follow);
                       
                        }else{

                           props.followThunk(props.id, props.follow);
                           // props.setFollowDisabled(true, props.id);                            
                           // followApi.followed(props.id).then(data => {
                           //           if(data.resultCode === 0){
                           //              props.following(!props.follow, props.id);
                           //              props.setFollowDisabled(false, props.id);                            
                           //           }
                           //         })
                                  }
                        }                                        
                     }
               disabled={props.disabledFollowButton.some(id => id === props.id)}
               className={style.follow}>
               {props.follow ? "Follow" : "Unfollow"}

            </button>

         </div>   
    )
}

export default UsersItem;