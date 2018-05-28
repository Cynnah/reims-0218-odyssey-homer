import React from "react";
import { Input, Form, Label } from "reactstrap";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "demo@demo.fr" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <Form>
        <Label>
          Name:
          <Input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </Label>
        <h1>{this.state.value} </h1>
      </Form>
    );
  }
}
export default SignUp;
