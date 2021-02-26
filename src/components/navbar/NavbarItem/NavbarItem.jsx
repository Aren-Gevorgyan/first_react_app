import React from "react";
import style from './NavbarItem.module.css';
import { NavLink } from 'react-router-dom';

const NavbarItem = (props) => {
    let friendsItem;

    if(props.friends !== undefined){

        friendsItem = props.friends.map(value => (
                 <img className={style} src={value} alt="friend photo"/>
            )) 

    }else{
        friendsItem = "";
    }

    return(
        <li className={style.item, style.active, style.container}>
            <NavLink to={`/${props.path}`} activeClassName={style.active}>{props.name}</NavLink>
            <div>{friendsItem}</div>
        </li>
    )
}

export default NavbarItem;