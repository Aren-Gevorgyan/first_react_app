import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DialogsPerson.module.css';

const DialogsPerson = () => {
    return (
        <div className={style.container}>
            <ul>
               
                <li><NavLink to='/dialogs/Armen' activeClassName={style.active}>Armen</NavLink></li>
                <li><NavLink to='/dialogs/Nazeli' activeClassName={style.active}>Nazeli</NavLink></li>
                <li><NavLink to='/dialogs/Artur' activeClassName={style.active}>Artur</NavLink></li>
                <li><NavLink to='/dialogs/Robert' activeClassName={style.active}>Robert</NavLink></li>
                <li><NavLink to='/dialogs/Meri' activeClassName={style.active}>Meri</NavLink></li>
                <li><NavLink to='/dialogs/Asiya' activeClassName={style.active}>Asiya</NavLink></li>
                
            </ul>
        </div>
    )
}

export default DialogsPerson;