import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Logo from "./Components/Head/Logo";
import CardsPage from "./Components/Card/CardsPage";
import Map from "./Components/Head/Map";
import {LoginForm} from "./Components/Login/LoginForm";
import style from "../src/css/App.module.css";
import Breadcrumbs from "./Components/Head/Breadcrumbs";
import CardView from "./Components/Card/CardView";


function App() {
    return (
      <Router>
          <ul className={style.ul}>
              <li><span className={style.logo}><Logo/></span></li>
              <li className={style.li}><Link to='/movies' className={style.link}>Movies</Link></li>
              <li><Link to='/home' className={style.link}>Home</Link></li>
              <li><Link to='/map' className={style.link}>Map</Link></li>
              <li><Link to='/login' className={style.link}>Login</Link></li>
          </ul>
          <Breadcrumbs/>
          <Switch>
              <Route exact path='/movies' component={CardsPage}/>
              <Route path='/movies/:id' component={(routeProps) => <CardView {...routeProps} />}/>
              <Route path='/map' component={Map}/>
              <Route path='/login' component={LoginForm}/>
          </Switch>
      </Router>
    );
}

export default App;
