import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'

import Authenticate from './components/Authenticate';
import Dashboard from './components/Dashboard';
import NotFound from './components/404';


class App extends Component {

    render() {

      return (
        <div className="App h-100">
          <main className="h-100">
            <Switch>
              <Route exact path="/authenticate"><Authenticate/></Route>
              <Route exact path="/dashboard"><Dashboard/></Route>
              <Route exact path="/"><Authenticate/></Route>
              <Route path="/"><NotFound/></Route>
            </Switch>
          </main>
        </div>
      );
    }
  }
  
  export default App;
