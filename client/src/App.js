import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'
import Authenticate from './components/Authenticate';
import Dashboard from './components/Dashboard';
import NotFound from './components/404';


class App extends Component {

    render() {

      return (
            <Switch>
              <Route exact path="/authenticate"><Authenticate/></Route>
              <Route exact path="/dashboard"><Dashboard/></Route>
              <Route exact path="/"><Authenticate/></Route>
              <Route path="/"><NotFound/></Route>
            </Switch>
      );
    }
  }
  
  export default App;
