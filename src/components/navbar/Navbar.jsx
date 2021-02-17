import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = ()=>{
   return( 
   <nav>

    <ul>
      <li className={style.item, style.active}><NavLink to='/profile' activeClassName={style.active}>Profile</NavLink></li>
      <li className={style.item}><NavLink to='/dialogs' activeClassName={style.active}>Messages</NavLink></li>
      <li className={style.item}><NavLink to='/news' activeClassName={style.active}>News</NavLink></li>
      <li className={style.item}><NavLink to='/music' activeClassName={style.active}>Music</NavLink></li>
      <li className={style.item}><NavLink to='/settings' activeClassName={style.active}>Settings</NavLink></li>
    </ul>

  </nav> 
   )
}

export default Navbar;