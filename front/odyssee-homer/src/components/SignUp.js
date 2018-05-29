import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      checkPassword: "",
      firstName: "",
      lastName: ""
    };

    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.updateCheckPassword = this.updateCheckPassword.bind(this);
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateEmail(event) {
    this.setState({ email: event.target.value });
  }

  updatePassword(event) {
    this.setState({ password: event.target.value });
  }

  updateCheckPassword(event) {
    this.setState({ checkPassword: event.target.value });
  }

  updateFirstName(event) {
    this.setState({ firstName: event.target.value });
  }

  updateLastName(event) {
    this.setState({ lastName: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const result = JSON.stringify(this.state, 1, 1);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>{result}</h1>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.updateEmail}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.updatePassword}
          />
          <input
            type="password"
            name="checkPassword"
            value={this.state.checkPassword}
            onChange={this.updateCheckPassword}
          />
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.updateFirstName}
          />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.updateLastName}
          />
          <input type="submit" value="Soumettre" />
        </form>
      </div>
    );
  }
}

export default SignUp;
