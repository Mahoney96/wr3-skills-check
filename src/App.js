import React, {Component} from "react";
import axios from 'axios';
import './reset.css';
import './App.css';
import { render } from "@testing-library/react";
import routes from "./routes";

class App extends Component {
  render(){
    return(
      <div className="App">
        <Nav />
        {routes}
      </div>
    );
  }
}

export default App;
