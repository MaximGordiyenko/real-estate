import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import Logo from "./Components/Head/Logo";
import CardsPage from "./Components/Card/CardsPage";
import Map from "./Components/Head/Map";
import {LoginForm} from "./Components/Login/LoginForm";
// import style from "../src/css/App.module.css";
import Breadcrumbs from "./Components/Head/Breadcrumbs";
import CardView from "./Components/Card/CardView";
import Navbar from "./Components/Head/Navbar";


function App() {
    return (
      <Router>
          <Navbar/>
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
