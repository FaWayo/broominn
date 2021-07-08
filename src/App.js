import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import DestinationLink from './Screens/DestinationLink';
import linkGenerator from './Screens/LinkGenerator';
import login from './Screens/Signin';
import register from './Screens/Signup';

function App() {
  return (
    <div className = "App">
    <Router>
      <Switch>
        <Route exact path='/' component={register}/>
        <Route path='/login' component={login}/>
        <Route  path='/generator' component={linkGenerator}/>
        <Route path ='/l/:id' component={DestinationLink}/>
      </Switch>
    </Router>
    </div>
  )
}

export default App;
