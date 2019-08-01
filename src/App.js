import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CardsPage from "./Components/Card/CardsPage";
import {LoginForm} from "./Components/Login/LoginForm";
import Breadcrumbs from "./Components/Head/Breadcrumbs";
import CardView from "./Components/Card/CardView";
import Navbar from "./Components/Head/Navbar";
import Contacts from "./Components/Head/Contacts";
import Services from "./Components/Head/Services";


function App() {
    return (
      <Router>
          <Navbar/>
          <Breadcrumbs/>
          <Switch>
              <Route exact path='/movies' component={CardsPage}/>
              <Route path='/movies/:id' component={(routeProps) => <CardView {...routeProps} />}/>
              <Route path='/contacts' component={Contacts}/>
              <Route path='/services' component={Services}/>
              <Route path='/login' component={LoginForm}/>
          </Switch>
      </Router>
    );
}

export default App;
