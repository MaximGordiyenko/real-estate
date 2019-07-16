import React from 'react';
import style from '../../css/Navbar.module.css';
import Logo from "./Logo";
import {Link} from "react-router-dom";

const Navbar = () => (
  <ul className={style.ul}>
    <li>
      <Link to='/'>
        <nav className={style.logo}>
          <Logo/>
        </nav>
      </Link>
    </li>
    <li className={style.li}>
      <Link to='/' className={style.link}>
        Movies
      </Link>
    </li>
    <li>
      <Link to='/blog' className={style.link}>
        Blog
      </Link>
    </li>
    <li>
      <Link to='/shop' className={style.link}>
        Shop
      </Link>
    </li>
    <li>
      <Link to='/login' className={style.link}>
        Login
      </Link>
    </li>
  </ul>
);

export default Navbar;