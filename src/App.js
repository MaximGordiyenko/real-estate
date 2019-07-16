import React from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Logo from "./Components/Head/Logo";
import CardsPage from "./Components/Card/CardsPage";
import Home from "./Components/Head/Home";
import Shop from "./Components/Head/Shop";
import {LoginForm} from "./Components/Login/LoginForm";
import style from "../src/css/App.module.css";
import Breadcrumbs from "./Components/Head/Breadcrumbs";


function App() {
  return (
    <Router>
      <ul className={style.ul}>
        <li><Link to='/'><nav className={style.logo}><Logo/></nav></Link></li>
        <li className={style.li}><Link to='/movies' className={style.link}>Movies</Link></li>
        <li><Link to='/home' className={style.link}>Home</Link></li>
        <li><Link to='/shop' className={style.link}>Shop</Link></li>
        <li><Link to='/login' className={style.link}>Login</Link></li>
      </ul>
        <Breadcrumbs/>
      <Route exact path='/' component={CardsPage}/>
      <Route path='/movies' component={CardsPage}/>
      <Route path='/home' component={Home}/>
      <Route path='/shop' component={Shop}/>
      <Route path='/login' component={LoginForm}/>
    </Router>
  );
}

export default App;
