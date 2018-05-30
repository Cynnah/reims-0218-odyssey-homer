import React, { Component } from 'react';
import './App.css';

import SignUp from './Componants/SignUp.js';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			email :""
		}
	}
	updateEmailField(event) {
		this.setState({
			email: event.target.value 
		})
	}
  render() {
    return (

      	<div className="App">
		<h1>{this.state.email}</h1>
		<input type="email" name="email" onChange={this.updateEmailField.bind(this)}/>
		<SignUp email={this.state.email} />      
	</div>
    );
  }
}

export default App;
