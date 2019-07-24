import React, { Component } from "react";

class SignUp extends Component {
  
  state = {
      email: '',
      password: '',
      verificationPassword: '',
      firstname: '',
      lastname: ''
    };
  

  updateEmailField = (event) => {
    this.setState({ 
      [event.target.name]: event.target.value 
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(JSON.stringify(this.state))
  }

  render() {

    const email = this.state.email;
    const password = this.state.password;
    const verificationPassword = this.state.verificationPassword;
    const firstname = this.state.firstname;
    const lastname = this.state.lastname;
    const handleChanges = this.updateEmailField;
    const handleSubmit = this.handleSubmit;

    return (
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <h3>{email}</h3>
          <label>Email : <br />
            <input type="email" name="email" onChange={handleChanges} />
          </label>

          <h3>{password}</h3>
          <label>Mot de passe : <br />
            <input type="password" name="password" onChange={handleChanges} />
          </label>

          <h3>{verificationPassword}</h3>
          <label>Vérification : <br />
            <input type="password" name="verificationPassword" onChange={handleChanges} />
          </label>

          <h3>{firstname}</h3>
          <label>Prénom : <br />
            <input type="text" name="firstname" onChange={handleChanges} />
          </label>

          <h3>{lastname}</h3>
          <label>Nom : <br />
            <input type="text" name="lastname" onChange={handleChanges} />
          </label><br />

          <input type="submit" value="Soumettre" />
        </form>
      </div>
    );
  }
}

export default SignUp;