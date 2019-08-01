import React from 'react';
import style from '../../css/Navbar.module.css';
import Logo from "./Logo";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
      <nav className={style.nav}>
          <ul className={style.ul}>
              <li><span className={style.logo}><Logo/></span></li>
              <span className={style.separator}>|</span>
              <li className={style.li}>
                  <Link to='/movies' className={style.link}>Movies</Link>
                  <div className={style.dropdown}>
                      <button className={style.dropbtn}>&#10148;</button>
                      <div className={style.dropdownContent}>
                          <Link to="">Link 1</Link>
                          <Link to="">Link 2</Link>
                          <Link to="">Link 3</Link>
                      </div>
                  </div>
              </li>
              <span className={style.separator}>|</span>
              <li>
                  <Link to='/services' className={style.link}>Services</Link>
                  <div className={style.dropdown}>
                      <button className={style.dropbtn}>&#10148;</button>
                      <div className={style.dropdownContent}>
                          <Link to="">Link 1</Link>
                          <Link to="">Link 2</Link>
                          <Link to="">Link 3</Link>
                      </div>
                  </div>
              </li>
              <span className={style.separator}>|</span>
              <li>
                  <Link to='/contacts' className={style.link}>Contacts</Link>
                  <div className={style.dropdown}>
                      <button className={style.dropbtn}>&#10148;</button>
                      <div className={style.dropdownContent}>
                          <Link to="">Link 1</Link>
                          <Link to="">Link 2</Link>
                          <Link to="">Link 3</Link>
                      </div>
                  </div>
              </li>
              <span className={style.separator}>|</span>
              <li><Link to='/login' className={style.link}>Login</Link></li>
          </ul>
      </nav>
    );
};

export default Navbar;