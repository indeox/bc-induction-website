import React, { Component } from 'react';

class RegisterForm extends Component {
	
	constructor() {
		super();
		this.state = {
			name: "Name",
			email: "Email",
		}
	}

	changeFormEntry(title) {
		this.setState({name: title});
	}

	handleChange(e) {
		this.changeFormEntry(e.target.value);
	}

	render() {
		return (
			<form>
				<h1>{this.state.name}</h1>
				<input value={this.state.name} onChange={this.handleChange.bind(this)}/>
				<input type='submit'></input>
			</form>
		);
	}
}

export default RegisterForm;