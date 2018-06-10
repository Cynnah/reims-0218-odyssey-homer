import React, {Component} from 'react';

export class SignUp extends Component {
	constructor(props){
		super(props);
		this.state = {
			email :"bob@wcs.fr",
			password: "",
			password2: "",
			firstName: "Bob",
			lastName: "Lambda"
		}
		this.updateEmailField = this.updateEmailField.bind(this);
		this.updatePasswordField = this.updatePasswordField.bind(this);
		this.updatePassword2Field = this.updatePassword2Field.bind(this);
		this.updateFirstNameField = this.updateFirstNameField.bind(this);
		this.updateLastNameField = this.updateLastNameField.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	updateEmailField(event) {
		this.setState({
			email: event.target.value 
		})
	}

	updatePasswordField(event) {
	this.setState({
		password: event.target.value 
		})
	}

	updatePassword2Field(event) {
		this.setState({
			password2: event.target.value 
			})
		}

	updateFirstNameField(event) {
		this.setState({
			firstName: event.target.value 
		})
	}

	updateLastNameField(event) {
		this.setState({
			lastName: event.target.value 
		})
	}

	handleSubmit() {
		console.log(this.state)
	}

	render() {
		return(<div> 
				<h1>{JSON.stringify(this.state, 1, 1)}</h1>
				<p>{this.state.email}</p>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="userMail">Your email </label>
					<input type="email" onChange={this.updateEmailField}/>
					<br />
					<label htmlFor="userPassword">Your password </label>
					<input type="password" onChange={this.updatePasswordField}/>
					<br />
					<label htmlFor="userPassword2">Your password again </label>
					<input type="password" onChange={this.updatePassword2Field}/>
					<br />
					<label htmlFor="userFirstName">Your first name </label>
					<input type="text" onChange={this.updateFirstNameField}/>
					<br />
					<label htmlFor="userLastName">Your last name </label>
					<input type="text"onChange={this.updateLastNameField}/>
					<input type="submit" value="Soumettre"/>
				</form>
			</div>)
	}
}


export default SignUp

