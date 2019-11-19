import React, { Component } from "react";
import { Route } from "react-router-dom";
import Register from './components/Register';


class App extends Component {
    render() {
      return (
        <div className="App h-100">
          <main className="h-100">
            <Route exact path="/register" component={Register} />
          </main>
        </div>
      );
    }
  }
  
  export default App;
