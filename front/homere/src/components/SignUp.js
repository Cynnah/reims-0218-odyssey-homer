import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.updateEmailField = this.updateEmailField.bind(this);
  }

  updateEmailField(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <h1>{this.state.value}</h1>
          <input
            type="text"
            value={this.state.value}
            onChange={this.updateEmailField}
          />
          email
        </form>
      </div>
    );
  }
}

export default SignUp;
