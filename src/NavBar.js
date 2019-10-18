import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
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
      </div>
    );
  }
}
export default withRouter(NavBar);
