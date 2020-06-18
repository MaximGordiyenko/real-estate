import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import CardsPage from "./Components/Card/CardsPage";
import {LoginForm} from "./Components/Login/LoginForm";
import Breadcrumbs from "./Components/Head/Breadcrumbs";
import CardView from "./Components/Card/CardView";
import Navbar from "./Components/Head/Navbar";
import Contacts from "./Components/Head/Contacts";
import Services from "./Components/Head/Services";
import CarouselItem from "./Components/Carousel/CarouselItem";
import Uploader from "./Components/Uploader/Uploader";

function App() {
    return (
      <Router>
          <Navbar/>
          <Breadcrumbs/>
          <Switch>
              <Route exact path='/main' component={CardsPage}/>
              <Route path='/main/:id' render={(routeProps) => <CardView {...routeProps} />}/>
              <Route path='/contacts' component={Contacts}/>
              <Route path='/carousel:id' component={(props) => <CarouselItem {...props} />}/>
              <Route path='/services' component={Services}/>
              <Route path='/login' component={LoginForm}/>
              <Route path='/uploader' component={Uploader}/>
              <Redirect from='/' to='/main'/>
          </Switch>
      </Router>
    );
}

export default App;
