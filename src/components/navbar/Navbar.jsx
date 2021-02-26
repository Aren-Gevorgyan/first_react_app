import React from 'react';
import style from './Navbar.module.css';
import NavbarItem from './NavbarItem/NavbarItem';

const Navbar = (props)=>{

   let itemMenu = props.menuItem.map(value => (
   <NavbarItem name={value.name} path={value.path} friends={value.friends}/>))
  
   return( 
   <nav>

    <ul>
      {itemMenu}
    </ul>

  </nav> 
   )
}

export default Navbar;