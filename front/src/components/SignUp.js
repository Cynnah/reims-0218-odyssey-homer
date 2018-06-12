import React, {Component} from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {email: "", pass: "", passConfirm: "", firstName: "", lastName: ""}
    this.updateEmailField = this.updateEmailField.bind(this)
    this.updatePassField = this.updatePassField.bind(this)
    this.updateConfirmPassField = this.updateConfirmPassField.bind(this)
    this.updateFirstNameField = this.updateFirstNameField.bind(this)
    this.updateLastNameField = this.updateLastNameField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  updateEmailField(event) {
    this.setState({email: JSON.stringify(event.target.value)})
  }

  updatePassField(event) {
    this.setState({pass: JSON.stringify(event.target.value)})
  }

  updateConfirmPassField(event) {
    this.setState({passConfirm: JSON.stringify(event.target.value)})
  }

  updateFirstNameField(event) {
    this.setState({firstName: JSON.stringify(event.target.value)})
  }

  updateLastNameField(event) {
    this.setState({lastName: JSON.stringify(event.target.value)})
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(JSON.stringify(this.state))
  }
  
  render() {
    return(<div>
      <h1>{JSON.stringify(this.state)}</h1>
      <ul>
        <li>Adresse mail : {this.state.email}</li>
        <li>Mot de passe : {this.state.pass}</li>
        <li>Confirmation mot de passe : {this.state.passConfirm}</li>
        <li>Prénom : {this.state.firstName}</li>
        <li>Nom : {this.state.lastName}</li>
      </ul>
      <form onSubmit={this.handleSubmit}>
        <input type="email" name="email" onChange={this.updateEmailField}/>
        <input type="password" name="pass" onChange={this.updatePassField}/>
        <input type="password" name="confirmPass" onChange={this.updateConfirmPassField}/>
        <input type="text" name="firstName" onChange={this.updateFirstNameField}/>
        <input type="text" name="lastName" onChange={this.updateLastNameField}/>
        <input type="submit" value="Soumettre à validation"/>
      </form>
      </div>);
  }
}

export default SignUp