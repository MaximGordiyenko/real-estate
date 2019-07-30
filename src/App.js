import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CardsPage from "./Components/Card/CardsPage";
import Map from "./Components/Head/Map";
import {LoginForm} from "./Components/Login/LoginForm";
import Breadcrumbs from "./Components/Head/Breadcrumbs";
import CardView from "./Components/Card/CardView";
import Navbar from "./Components/Head/Navbar";
import Carousel from "./Components/Carousel/Carousel";


function App() {
    return (
      <Router>
          <Carousel/>
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
