import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SignUp from './Components/SignUp.js';

class App extends Component {
  render() {
    return (
      	<div className="App">
		<SignUp email="coucou@wcs.com" />      
	</div>
    );
  }
}

export default App;
