import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import history from './utils/history';
import AppNavbar from './components/AppNavbar';
import Landing from './containers/Landing';
import Project from './containers/Project';


import { Provider } from 'react-redux';
import store from './store';
import API from './adapters/API';
import { useDispatch } from 'react-redux';
import { validateUser } from './actions/userActions';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'reactstrap';
import './App.css';
import Home from './containers/Home';
// loads more comments
// loads

// test test test test




// comment coemmt
const App = () => {

   

  return (

    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Router history={history}>
          <Switch>
            <Route exact path="/" render={(props) => <Landing {...props}/>}/>
            <Route exact path="/home" render={(props) => <Home {...props}/>}/>
            <Route exact path="/projects/:id" render={(props) => <Project {...props}/>}/>
          </Switch>
        </Router>
      </div>
  
    </Provider>
  );
}

export default App;
