import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class RegisterForm extends Component {

	render() {
		return (
      <div>
				<Input
					type="text" 
					placeholder="Enter your British Council Induction Code"
					class="form-control"
          appState={this.props.appState}
          setFormState={this.props.setFormState}
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

  		if (this.state.value === 'BC_IND_LOND' && 
  			this.state.submitted) {
       		return (
        		<Redirect to="/BCDigital"/>
      		);
     	}
     	else if (this.state.value !== 'BC_DIG_LOND' && 
  			this.state.submitted) {
     		alert(this.state.value + ' is not a correct British Council induction code. Please try again.');
     		this.state.submitted.setState(false);
     	}

    	return (
        <section id="contact">
          
          <link href="https://fonts.googleapis.com/css?family=Oleo+Script:400,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Teko:400,700" rel="stylesheet" />
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
          
          <div className="section-content">
            <h1 className="section-header">Enter your 
              <span className="content-header"> BC Induction Code</span>
            </h1>
            <h3>Enter in your details provided to you before you began.</h3>
          </div>
          <div className="contact-section">
            <div className="container">
              <form onSubmit={this.handleSubmit} >
                <div className="col-md-6 form-line">
                    <div className="form-group">
                      <label for="exampleInputUsername">Your name</label>
                      <input 
                        type="text"
                        onChange={
                          (event) => this.props.setFormState('exampleInputUsername', event.target.value)
                        } 
                        value={this.props.appState.inductionForm.exampleInputUsername}
                        className="form-control" 
                        id="exampleInputUsername" 
                        placeholder="Enter your name"
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputEmail">BC Induction Code</label>
                      <input 
                        type={ this.props.type } 
                        placeholder={ this.props.placeholder } 
                        className={ this.props.class }
                        value={ this.state.value }
                        onChange={ this.handleChange }
                        required
                      />
                    </div>  
                    <div className="form-group">
                      <label for="telephone">Email</label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        placeholder="Enter your email" 
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for ="description"> Please Read</label>
                      <h3>You will now enter into your personal British Council journey, tailored to your specific role.</h3>
                      <h3>This will introduce you to your team members, workplace, and any vital information you may need to know
                      before you begin.</h3>
                    </div>
                    <div>
                      <button 
                        type="submit" 
                        className="btn btn-default submit">
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>   Submit
                      </button>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      );
  	}
}

export default RegisterForm;
