import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    this.props.history.push({
      pathname: "/results",
      state: this.state
    });
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <TextField
          label='First Name'
          name='firstName'
          value={this.state.firstName}
          onChange={this.handleChange}
          margin='normal'
          variant='outlined'
        />
        <TextField
          label='Last Name'
          name='lastName'
          value={this.state.lastName}
          onChange={this.handleChange}
          margin='normal'
          variant='outlined'
        />
        <br></br>
        <Button variant='contained' onClick={this.handleSubmit}>
          Submit
        </Button>
      </div>
    );
  }
}
export default Form;
