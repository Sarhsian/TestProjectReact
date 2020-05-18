import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return( <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="#s">News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="#s">Music</NavLink>
    </div>
  </nav>
  )}

export default Nav;