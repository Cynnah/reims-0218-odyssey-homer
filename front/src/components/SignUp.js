import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "test@gmail.com" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SignUp;
