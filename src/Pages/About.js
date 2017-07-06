import React, { Component } from 'react';
import logo from '../Images/British-Council.jpg';

export default class About extends Component {
	
	constructor() {
		super();
		this.state = {
			supervisor: "name@email.com",
			cont_num: "01234 567890",
			liv_lib: "link@liv_lib",
			otherlinks: "Other stuff"
		}
	}

	render() {
		return (
			<div>
				<div className="container">
			        <header className="jumbotron hero-spacer">
			            <h2>Learn more about the British Council Organisation</h2>
			            <hr></hr>
			            <p>Here you'll find all the key resources you need to quickly integrate into 
			            the British Council</p>
			        </header>
			    </div>
				
			    <div className="container text-center">    
				  	<h3>What We Do</h3>
				  	<br></br>
				  	<div className="row">
				    	<div className="col-sm-3">
				      		<p>Current Project</p>
				      			<div className='row text-center'>
				        			<div className="panel-body"><img src={logo} alt='#' width='100%' /></div>
				        		</div>
				    	</div>
				    	<div className="col-sm-3">
				      		<p>Project 2</p> 
				      		<div className='row text-center'>
			        			<div className="panel-body"><img src={logo} alt='#' width='100%' /></div>
			        		</div>   
				    	</div>
				    	<div className="col-sm-3">
				      		<div className="well">
				       			<p><u>Supervisor</u></p>
				       			<p>{this.state.supervisor}</p>
				      		</div>
				      		<div className="well">
				       			<p><u>Supervisor Number</u></p>
				       			<p>{this.state.cont_num}</p>
				      		</div>
				    	</div>
				    	<div className="col-sm-3">
				      		<div className="well">
				       			<p><u>Living Library</u></p>
				       			<p>{this.state.liv_lib}</p>
				      		</div>
				      		<div className="well">
				      			<p><u>Other links</u></p>
				      			<p>{this.state.otherlinks}</p>
				      		</div>
				    	</div>  
				  	</div>
				</div>
			</div>
		);
	}
}