import React from 'react';
import style from './Posts.module.css';

const Post = () => {
    return(
        <div>

           <img className={style.avatar} src='https://st3.depositphotos.com/12985848/16098/i/600/depositphotos_160982490-stock-photo-confident-businesswoman-in-formal-wear.jpg'
            alt='post photo'/> 

           post 1

           <div>
               <span className={style.like}>like</span>
           </div>

         </div>
    )
}

export default Post;