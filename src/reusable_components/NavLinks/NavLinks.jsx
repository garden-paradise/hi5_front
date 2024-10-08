import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../NavLinks/NavLinks.module.css';

const NavLinks = ({ data }) => {
  return (
    <nav className={style.nav}>
      <ul className={style.nav_ul}>
        {data.map((item) => (
          <li className={style.nav_li}>
            <NavLink
              to={`/${item.url}`}
              className={`${style.nav_link} ${
                item.active && style.nav_link_active
              }`}
            >
              {item.name}
              {!item.active ? <span className={style.nav_line}>/</span> : ''}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
