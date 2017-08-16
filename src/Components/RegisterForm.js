import React, { Component } from 'react';
import { Redirect } from 'react-router';

class RegisterForm extends Component {

	render() {
		return (
			<div className="well well-lg">
				<Input
					type="text" 
					placeholder="Enter your British Council Induction Code"
					class="form-control input-lg"
				/>
			</div>
		);
	}
}

class Input extends Component {
  	
  	constructor(props) {
    	super(props);

    	this.state = { 
    		value: '',
    		submitted: false 
    	};
    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleSubmit(event) {
  		event.preventDefault();
    	this.setState({ submitted: true });
  	}

  	handleChange(event) {
    	this.setState ({ 
    		value: event.target.value.toUpperCase()
    	});
  	}

  	render() {

  		if (this.state.submitted) {
       		return (
        		<Redirect to="/History"/>
      		);
     	}

    	return (
    		<form onSubmit={this.handleSubmit} >
	    		<div className='form-group'>
		            <input 
		            	type={ this.props.type } 
		            	placeholder={ this.props.placeholder } 
		            	className={ this.props.class }
		            	value={ this.state.value }
		            	onChange={ this.handleChange }
		            />
		            <span className="help-block">Enter in your department code here.</span>
		            <input type="submit" value="Submit" />
				</div>
			</form>
        );
  	}
}

export default RegisterForm;
