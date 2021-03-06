import React from 'react';
import style from './Posts.module.css';

const Post = (props) => {
    return(
        <div className={style.container}>

           <div className={style.post}>

             <img className={style.avatar} src='https://st3.depositphotos.com/12985848/16098/i/600/depositphotos_160982490-stock-photo-confident-businesswoman-in-formal-wear.jpg'
               alt='post photo'/> 

              {props.post}
              
           </div>

           <div>
               <span className={style.like}>like {props.like}</span>
           </div>

        </div>
    )
}

export default Post;