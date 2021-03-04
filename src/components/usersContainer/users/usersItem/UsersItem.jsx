import React from 'react';
import style from './UsersItem.module.css';

const UsersItem = (props) => {
    
    return (
         <div className={style.container}>

            <div className={style.usersContainer}> 

              <div className={style.avatar}>

                 <img src={props.photo}/>

              </div> 

              <div className={style.description}>

                 <div className={style.descTop}>
                    <p>{props.name}</p>
                    <p>{props.country}</p>
                 </div>

                 <div className={style.descFooter}>
                    <p>{props.status}</p>
                    <p>{props.city}</p>
                 </div>

              </div>

            </div>
            
            <button onClick={()=>props.following(!props.follow, props.id)} className={style.follow}>

              {props.follow ? "Follow" : "Unfollow"}

            </button>

         </div>   
    )
}

export default UsersItem;