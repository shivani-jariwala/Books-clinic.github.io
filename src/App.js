import React, { Component } from "react";
import ReadCsv from "./ReadCsv";
import Isbn from './Isbn';
import Add from './Add';
import {
  BrowserRouter as Router, Route, Switch,NavLink
} from "react-router-dom";
 
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>RaftLabs</h1>
          <ul className="header">
            <li><NavLink to="/read-csv">Read CSV</NavLink></li>
            <li><NavLink to="/isbn">Find by ISBN</NavLink></li>
            <li><NavLink to="/add">Add</NavLink></li>
          </ul>
          <div className="content">
          <Switch>
          <Route exact path="/read-csv" component={ReadCsv}/>
            <Route path="/isbn" component={Isbn}/>
            <Route path="/add" component={Add}/>
            </Switch>
          </div>
        </div>
        </Router>
    );
  }
}
 
export default App;