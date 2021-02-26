import React from "react";
import style from './NavbarItem.module.css';
import { NavLink } from 'react-router-dom';

const NavbarItem = (props) => {
    return(
        <li className={style.item, style.active}>
            <NavLink to={`/${props.path}`} activeClassName={style.active}>{props.name}</NavLink>
        </li>
    )
}

export default NavbarItem;