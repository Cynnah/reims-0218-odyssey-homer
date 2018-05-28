import React from "react";
import { Input, Container } from "reactstrap";

class SignUp extends React.Component {
  render() {
    return (
      <Container>
        <h1>Sign up</h1>{" "}
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="Email"
        />
      </Container>
    );
  }
}

export default SignUp;
