import React from "react";
import style from './NavbarItem.module.css';
import { NavLink } from 'react-router-dom';

const NavbarItem = (props) => {
    let friendsItem;

    if(props.friends !== undefined){

        friendsItem = props.friends.map(value => (
                 <img key={value.id} src={value.img} alt="friend photo"/>
            )) 

    }else{
        friendsItem = "";
    }

    return(
        <li className={style.active, style.container}>
            <NavLink to={`/${props.path}`} activeClassName={style.active}>{props.name}</NavLink>
            <div>{friendsItem}</div>
        </li>
    )
}

export default NavbarItem;