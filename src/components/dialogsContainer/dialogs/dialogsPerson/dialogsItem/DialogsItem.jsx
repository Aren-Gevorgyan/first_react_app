import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DialogsItem.module.css';

const DialogsItem = (props) => {
    
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.container}>             
          <li>
            <img src={props.photo}/>
            <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
          </li>         
        </div>
    )
}

export default DialogsItem;