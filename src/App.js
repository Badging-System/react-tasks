import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Form from "./Form";
import FormResults from "./FormResults";
import task1 from "./task1";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  //Copied from FOrm.js
  //json can call another json
  //Think of state as a tbale
  //You have to use setState to change anything in state (only way to do it)
  constructor(props) {
    super(props);
    this.state = {
      //firstName: "",
      //lastName: ""
      number : 0
    };
    //this.handleChange = this.handleChange.bind(this);
    this.counter = this.counter.bind(this);
  }
  counter() { 
    var x = this.state.number;
    //Remember how this.setState
    this.setState({number : x + 1})
  }; 
  render() {
    return (
      <Router>
        <h1> {this.state.number} </h1>
        <NavBar props = {this.counter}/>
        <Switch>
          <Route exact path='/' component={HomeText} />
          <Route path='/form' component={Form} />
          <Route
            path='/results'
            render={props => <FormResults items={props} {...props} />}
          ></Route>
          {/*This routes the task1 function that I created to app I believe*/} 
          <Route path='/task1' component ={task1} />
        </Switch>
      </Router>
    );
  }
}

function HomeText() {
  return <h1>Home Page </h1>;
}

export default App;
