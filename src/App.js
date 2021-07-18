import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import GoLink from './Screens/GoLink';
import linkGenerator from './Screens/LinkGenerator';
import login from './Screens/Signin';
import register from './Screens/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={register} />
          <Route path='/login' component={login} />
          <Route path='/generator' component={linkGenerator} />
          <Route path='/l/:code' component={GoLink} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
