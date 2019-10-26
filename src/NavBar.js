import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Task1Icon from "@material-ui/icons/Accessible"; //Found icon name and imported it
//import button from website
//add button to return
//this.props.counter
import Task2AIcon from "@material-ui/icons/Build";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Link to='/'>
          <HomeIcon />
        </Link>

        <Link to='/form'>
          <CheckBoxIcon />
        </Link>
        {/* <Link to='/yourPathThatMatchesYourRoute'></Link> */}
        {/*Need to use the name that I imported from above */}
        <Link to = '/task1'>
          <Task1Icon />
        </Link>
        <button onClick = {this.props.counter}>
          <Task2AIcon />
        </button>
      </div>
    );
  }
}
export default withRouter(NavBar);
