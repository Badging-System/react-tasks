import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Form from "./Form";
// import FormResults from "./FormResults";
import task1 from "./task1";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomeText} />
          <Route path='/form' component={Form} />
          {/* <Route
            path='/results'
            render={props => <FormResults items={props} {...props} />}
          ></Route> */
          }
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
