import React from 'react';
import style from './Navbar.module.css';
import NavbarItem from './NavbarItem/NavbarItem';

//React.memo wear props in case of change

const Navbar = React.memo((props)=>{
   let itemMenu = props.menuItem.map(value => (
   <NavbarItem key={value.id} name={value.name} path={value.path} friends={value.friends}/>))
  
   return( 
   <nav>

    <ul>
      {itemMenu}
    </ul>

  </nav> 
   )
});

export default Navbar;